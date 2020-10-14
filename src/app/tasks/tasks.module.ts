import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { RemindersModule } from '../reminders/reminders.module';
import { AttachmentsModule } from '../attachments/attachments.module';

import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { EntityTasksComponent } from './entity-tasks/entity-tasks.component';

import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, TaskEditorComponent, EntityTasksComponent],
  imports: [
    TasksRoutingModule,
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule,

    RemindersModule,
    AttachmentsModule
  ],
  exports: [TasksComponent, EntityTasksComponent]
})
export class TasksModule { }
