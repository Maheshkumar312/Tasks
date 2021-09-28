import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = environment.apiURL+"/api/employees";

  constructor(private httpClient: HttpClient) { }
  
  getAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
  

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(this.baseURL+"/addEmployee", employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+`/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(this.baseURL+`/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL+`/${id}`,{responseType: 'text'});
  }
}
