import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../models/reminder';

@Component({
  selector: 'plx-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  reminders: Reminder[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addReminder() {
    let id = 0;
    this.reminders.forEach(r => id = r.Id > id ? r.Id : id);
    this.reminders.push({ Id: id, RemindOn: new Date(Date.now()) });
  }
}
