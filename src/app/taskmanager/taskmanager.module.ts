import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagerComponent } from './taskmanager.component';
import { AddUserComponent } from './adduser/adduser.component';
import { AddTaskComponent } from './addtask/addtask.component';

const routeList: Routes = [
  {
    path:'',
    component: TaskManagerComponent,
    children: 
    [
      {
        path: 'user/create',
        component: AddUserComponent
      }
    ]
  }
//   {
//     path: 'user/create',
// // path: '',
//     component: AddUserComponent
//   }
  // {
  //   path: 'task/create',
  //   component: AddTaskComponent
  // },
  // {
  //   path: '',
  //   component: TaskManagerComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routeList)],
  // declarations: [TaskManagerComponent]//, AddTaskComponent, AddUserComponent]
  declarations: [AddUserComponent, TaskManagerComponent]
  // bootstrap: [TaskManagerComponent]
})

export class TaskManagerModule{

}