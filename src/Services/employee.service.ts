import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmployee } from '../app/Model/add-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  login(un:string,ps:string){
   return this.http.get(`http://localhost:8081/employee/getspecific/${un}/${ps}`);
  }

  addEmployee(emp:AddEmployee)
  {
    return this.http.post(`http://localhost:8081/employee/save`,emp);
  }


  getEmployee(){
    return this.http.get(`http://localhost:8081/employee/getall`);
  }

}
