import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  selector: 'welcome'
})
export class WelcomeComponent {
  loggedUser: string = 'Naman';
  welcomeMessage: string = `Hi ${this.loggedUser}. Please check your tasks `;
    
  }