import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../model/Customer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer!: Customer;

  constructor(private customerService: CustomerService, private _activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer();
    console.log(this.customer);
  }

  getCustomer():void{
    // @ts-ignore
    this.customerService.getCustomer(this._activatedroute.snapshot.paramMap.get('id')).subscribe(customer => this.customer = customer);
  }

}
