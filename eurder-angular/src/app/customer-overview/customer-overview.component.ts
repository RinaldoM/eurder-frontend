import {Component, OnInit, PipeTransform} from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../model/Customer";
import {map, Observable, startWith} from "rxjs";
import {FormControl} from "@angular/forms";




@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {
  customerList!: Customer[];
  searchText!: '';


  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customerList = customers);
  }


}
