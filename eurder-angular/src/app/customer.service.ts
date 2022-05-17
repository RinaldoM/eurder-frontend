import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Item} from "./model/Item";
import {Customer} from "./model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private backendUrl:string;



  constructor(private http: HttpClient) {
    this.backendUrl = `${environment.backendUrl}/customers`;
  }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.backendUrl);
  }
}
