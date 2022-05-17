import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "./model/Item";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(itemList: Item[], filterText: string): Item[] {
    if(!itemList) return []
    return itemList.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()));
  }

}
