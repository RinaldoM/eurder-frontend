import {Component, OnInit} from '@angular/core';
import {ItemService} from "../item.service";
import {Item, StockUrgency} from "../model/Item";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  itemList!: Item[];
  STOCK_LOW: string = 'STOCK_LOW';
  STOCK_MEDIUM: string = 'STOCK_MEDIUM';
  STOCK_HIGH: string = 'STOCK_HIGH';
  searchText: string = '';
  closeResult = '';
  StockUrgency = StockUrgency;

  itemForm!: FormGroup;
  hasError: boolean = false;



  constructor(private itemService: ItemService, private modalService: NgbModal, private fb: FormBuilder) {
    this.myForm();
  }

  ngOnInit(): void {
    this.getItems();
    console.log(StockUrgency);
  }

  myForm() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required ],
      description:  ['', Validators.required ],
      price: '',
      amountOfStock: '',
    });
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.itemList = items);
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    this.itemService.addItem(this.itemForm.value)
      .subscribe({
        next:() =>{
          this.itemForm.reset();
          window.location.reload();
        },
        error: (error) =>{
          this.hasError = true;
        }
      });
  }



}
