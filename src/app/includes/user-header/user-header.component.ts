import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit {
  un:string;
  ut:string;
  
  ngOnInit(): void {
   this.un=(localStorage.getItem("username"));
   this.ut=(localStorage.getItem("usertype"))
  }

 

}
