import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { ReminderEditorComponent } from './reminder-editor/reminder-editor.component';
import { ReminderComponent } from './reminder/reminder.component';
import { RemindersComponent } from './reminders/reminders.component';



@NgModule({
  declarations: [ReminderEditorComponent, ReminderComponent, RemindersComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports: [RemindersComponent]
})
export class RemindersModule { }
