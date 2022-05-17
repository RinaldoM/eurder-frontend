import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "./model/Customer";

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(customerList: Customer[], filterText: string): Customer[] {
    if(!customerList) return []
    return customerList.filter(customer => customer.lastname.toLowerCase().includes(filterText.toLowerCase()));
  }

}
