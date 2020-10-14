import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../models/reminder';

@Component({
  selector: 'plx-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  reminder: Reminder = {
    Id: 1,
    RemindOn: new Date(Date.now()),
    Dismissed: null
  };

  get Id(): number { return this.reminder.Id }
  set Id(value: number) { this.reminder.Id = value }

  get RemindOn(): Date { return this.reminder.RemindOn }
  set RemindOn(value: Date) { this.reminder.RemindOn = value }

  get Dismissed(): Date { return this.reminder.Dismissed }
  set Dismissed(value: Date) { this.reminder.Dismissed = value }

  constructor() { }

  ngOnInit(): void {
  }

}
