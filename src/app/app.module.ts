import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
 import { AddUserComponent } from './taskmanager/adduser/adduser.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { TaskManagerComponent } from './taskmanager/taskmanager.component';

// const appRoutes: Routes = [
//   { path: 'home', component: WelcomeComponent },
//   { path: 'taskmanager', component: TaskManagerComponent },
//   { path: 'taskmanager/:id',      component: TaskManagerComponent },
//   // {
//   //   path: 'heroes',
//   //   component: HeroListComponent,
//   //   data: { title: 'Heroes List' }
//   // },
//   { path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },asd
//   // { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
                                                                    { path: 'welcome', component: WelcomeComponent },
                                                                    // { path: 'taskmanager', component: TaskManagerComponent },
                                                                    // { path: 'task', component: AddUserComponent, outlet: "taskManagerRouter" },
                                                                    // { path: 'user/create', component: AddUserComponent, outlet: "taskManagerRouter" },
                                                                    { path: 'taskmanager', loadChildren: () => import('./taskmanager/taskmanager.module').then(mod => mod.TaskManagerModule) },
                                                                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                                                                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                                                                  ])
                 ],
  declarations: [ AppComponent, WelcomeComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
