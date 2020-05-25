import { Component } from '@angular/core';

@Component({
  templateUrl:'./navbar.component.html',
  selector: 'navbar',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  loggedInUser: string = "Naman Vinod";
}