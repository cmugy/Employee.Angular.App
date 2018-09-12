import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee,model';
import { Observable } from 'rxjs';
import {publishReplay, refCount} from 'rxjs/operators';


export class EmployeeService {
   client: HttpClient;
   url = 'http://employeewebapiazure20180822105822.azurewebsites.net/api/employees';

   constructor(httpClient: HttpClient) {
     this.client = httpClient;
   }

   getEmployees(): Observable<Employee[]> {
     return this.client.get<Employee[]>(this.url,{ observe : 'body'}).pipe(publishReplay(1), refCount());
   }


}
