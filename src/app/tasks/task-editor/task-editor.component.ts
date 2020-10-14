import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../models/task';

@Component({
  selector: 'plx-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {

  @Input() task: Task = {
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
  };

  @Output('on-close') onClose: EventEmitter<void> = new EventEmitter();

  get Id(): number { return this.task.Id }
  set Id(value: number) { this.task.Id = value }

  get Created(): Date { return this.task.Created }
  set Created(value: Date) { this.task.Created = value }

  get CreatedBy(): string { return this.task.CreatedBy }
  set CreatedBy(value: string) { this.task.CreatedBy = value }

  get Completed(): Date { return this.task.Completed }
  set Completed(value: Date) { this.task.Completed = value }

  get CompletedBy(): string { return this.task.CompletedBy }
  set CompletedBy(value: string) { this.task.CompletedBy = value }

  get AssignedTo(): string { return this.task.AssignedTo }
  set AssignedTo(value: string) { this.task.AssignedTo = value }

  get DueDate(): Date { return this.task.DueDate }
  set DueDate(value: Date) { this.task.DueDate = value }

  get StartDate(): Date { return this.task.Created }
  set StartDate(value: Date) { this.task.Created = value }

  get Title(): string { return this.task.Title }
  set Title(value: string) { this.task.Title = value }

  get Description(): string { return this.task.Notes }
  set Description(value: string) { this.task.Notes = value }

  get NotifyCreator(): boolean { return this.task.NotifyCreator }
  set NotifyCreator(value: boolean) { this.task.NotifyCreator = value }

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.onClose.next();
  }
}
