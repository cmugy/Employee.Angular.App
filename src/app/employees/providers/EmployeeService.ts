import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee,model';


export class EmployeeService {
   client: HttpClient;

   constructor(httpClient: HttpClient) {
     this.client = httpClient;
   }

   getEmployees(): Employee[] {
     return null;
   }


}
