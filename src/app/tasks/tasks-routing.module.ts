import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';

const tasksRoutes: Routes = [
  { path: 'tasks',  component: TasksComponent },
  { path: 'tasks/:id', component: TaskComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(tasksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule { }