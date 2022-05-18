import {Address} from "./Address";
import {PhoneNumber} from "./PhoneNumber";
import {Email} from "./Email";

export interface Customer {
  id: string;
  firstname: string;
  lastname: string;
  email: Email;
  address: Address;
  phoneNumber: PhoneNumber;

}
