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
    //get employee
  getAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
//save employee
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(this.baseURL+"/addEmployee", employee);
  }
//get employee by id
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+`/${id}`);
  }
//update employee
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(this.baseURL+`/${id}`, employee);
  }
//delete employee
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL+`/${id}`,{responseType: 'text'});
  }
}
