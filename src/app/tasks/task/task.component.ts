import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'plx-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task: Task = {
    Id: 1,
    AssignedTo: 'dgood',
    Completed: null,
    CompletedBy: null,
    Created: new Date(Date.now()),
    CreatedBy: 'dgood',
    DueDate: null,
    NotifyCreator: false,
    Notes: '',
    Title: 'my task'
  };

  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
