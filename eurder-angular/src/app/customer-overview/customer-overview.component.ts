import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../model/Customer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Country} from "../model/Address";


@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {
  customerList!: Customer[];
  searchText = '';
  closeResult = '';
  customerForm!: FormGroup;
  email!: string;

  countries: string[] = Object.values(Country);
  hasError: boolean = false;


  constructor(private customerService: CustomerService, private modalService: NgbModal, private fb: FormBuilder) {
    this.myForm();
  }



  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customerList = customers);
  }

  onSubmit() {
    this.customerService.addCustomer(this.customerForm.value)
      .subscribe({
        next: () => {
          this.customerForm.reset();
          window.location.reload();
        },
        error: (error) => {
          this.hasError = true;
        }
      });
    console.log(this.customerForm.value)

  }



  myForm() {
    this.customerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: this.fb.group({
        localPart: '',
        domain: '',
        complete: ''
      }),
      address: this.fb.group({
        streetName: '',
        houseNumber: '',
        postalCode: '',
        country: ''
      }),
      phoneNumber: this.fb.group({
        number: '',
        countryCallingCode: ''
      })
    });
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
}
