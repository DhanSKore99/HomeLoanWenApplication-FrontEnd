import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddEmployee } from '../../../Model/add-employee';
import { EmployeeService } from '../../../../Services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{
  
  addEmployee:AddEmployee[];

  constructor(private employeeService:EmployeeService){}

  @Output() getEmployee=new EventEmitter<AddEmployee>();
  
  
  
  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      (data:AddEmployee[])=>{
                                this.addEmployee=data;
                            }
      
    )
  }


}
