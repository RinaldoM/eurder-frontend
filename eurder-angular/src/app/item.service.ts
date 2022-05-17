import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Item, StockUrgency} from "./model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  private backendUrl:string;



  constructor(private http: HttpClient) {
    this.backendUrl = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.backendUrl);
  }


  addItem(item: Item): Observable<void>{
    return this.http.post<void>(this.backendUrl, item);
  }

}


