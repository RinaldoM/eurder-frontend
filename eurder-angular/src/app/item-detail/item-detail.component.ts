import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../model/Item";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item! : Item;
  constructor(private itemService: ItemService, private _activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getItem();
    console.log(this.getItem());
  }


  getItem():void{
    // @ts-ignore
    this.itemService.getItem(this._activatedroute.snapshot.paramMap.get('id')).subscribe(item => this.item = item);
  }

}
