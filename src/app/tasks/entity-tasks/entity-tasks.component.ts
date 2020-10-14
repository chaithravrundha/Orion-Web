import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'plx-entity-tasks',
  templateUrl: './entity-tasks.component.html',
  styleUrls: ['./entity-tasks.component.scss']
})
export class EntityTasksComponent implements OnInit {

  tasks: Task[] = TEST_DATA;
  selected: Task;

  @Input('context') context: string;
  @Input('context-id') contextId: string;

  constructor() { }

  ngOnInit(): void {
  }

  select(task: Task) {
    this.selected = task;
  }

  clear() {
    this.selected = null;
  }
}

const TEST_DATA: Task[] = [
  {
    Id: 1,
    Created: new Date(Date.now()),
    CreatedBy: 'dgood',
    Completed: null,
    CompletedBy: null,
    AssignedTo: null,
    DueDate: new Date(Date.now()),
    Title: 'This is my example task',
    Notes: 'This is my description',
    NotifyCreator: false
  }
];