import { Component, OnInit } from '@angular/core';
import { Usermenus } from '../../Model/usermenus';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {
  userRoles:Array<any>
  usertype:string
  ngOnInit(): void {
   
    this.usertype=localStorage.getItem("usertype");

   this.userRoles=Usermenus.usermenus[0][this.usertype]

  }

}
