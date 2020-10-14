export interface Task {
  Id: number;
  Created: Date;
  CreatedBy: string;
  Completed: Date;
  CompletedBy: string;
  AssignedTo: string;
  DueDate: Date;
  Title: string;
  Notes: string;
  NotifyCreator: boolean;
  /*
  Groups: Group[] = [];
  Tags: Tag[] = [];
  Claims: any[] = [];
  Tickets: any[] = [];
  QueueItems: any[] = [];
  Reminders: any[] = [];
  */
}