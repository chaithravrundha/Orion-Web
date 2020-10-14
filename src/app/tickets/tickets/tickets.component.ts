import { Component, OnInit } from '@angular/core';

const TEST_DATA = [
  {
    "Id": 61,
    "Tasks": [],
    "Caller": "testing 17150",
    "CreatedDate": "8/24/20, 4:18 PM",
    "ResolvedDate": "",
    "DueDate": "8/24/20, 10:00 AM",
    "Duration": "24 days 22hrs 58min 36sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 60,
    "Tasks": [],
    "Caller": "",
    "CreatedDate": "8/21/20, 12:01 PM",
    "ResolvedDate": "",
    "DueDate": "8/21/20, 10:00 AM",
    "Duration": "28 days 3hrs 14min 58sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 53,
    "Tasks": [],
    "Caller": "do something",
    "CreatedDate": "7/20/20, 3:29 PM",
    "ResolvedDate": "8/19/20, 3:44 PM",
    "DueDate": "7/20/20, 10:00 AM",
    "Duration": "30 days 14min 31sec",
    "CreatedBy": "kfollett",
    "AssignedTo": "bwightman",
    "Priority": "",
    "Status": "Resolved"
  },
  {
    "Id": 52,
    "Tasks": [],
    "Caller": "a task",
    "CreatedDate": "6/29/20, 3:10 PM",
    "ResolvedDate": "",
    "DueDate": "7/17/20, 12:00 AM",
    "Duration": "81 days 6min 6sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 51,
    "Tasks": [],
    "Caller": "Testing after the merge from 19.3.2",
    "CreatedDate": "6/18/20, 3:41 PM",
    "ResolvedDate": "",
    "DueDate": "6/18/20, 10:00 AM",
    "Duration": "91 days 23hrs 35min 35sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 50,
    "Tasks": [],
    "Caller": "Task after install.",
    "CreatedDate": "6/17/20, 4:14 PM",
    "ResolvedDate": "",
    "DueDate": "6/17/20, 10:00 AM",
    "Duration": "92 days 23hrs 2min 20sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 47,
    "Tasks": [],
    "Caller": "this is a task",
    "CreatedDate": "6/17/20, 10:08 AM",
    "ResolvedDate": "",
    "DueDate": "6/17/20, 10:00 AM",
    "Duration": "93 days 5hrs 8min 20sec",
    "CreatedBy": "kfollett",
    "AssignedTo": "kfollett",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 46,
    "Tasks": [],
    "Caller": "Testing after status",
    "CreatedDate": "6/16/20, 4:29 PM",
    "ResolvedDate": "",
    "DueDate": "6/17/20, 12:00 AM",
    "Duration": "93 days 22hrs 46min 56sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "High",
    "Status": "Open"
  },
  {
    "Id": 41,
    "Tasks": [],
    "Caller": "Supervisor Approval Required",
    "CreatedDate": "6/16/20, 10:27 AM",
    "ResolvedDate": "6/16/20, 11:10 AM",
    "DueDate": "6/16/20, 10:00 AM",
    "Duration": "42min 51sec",
    "CreatedBy": "bwightman",
    "AssignedTo": "bwightman",
    "Priority": "",
    "Status": "Resolved"
  },
  {
    "Id": 39,
    "Tasks": [],
    "Caller": "",
    "CreatedDate": "6/15/20, 2:19 PM",
    "ResolvedDate": "",
    "DueDate": "6/15/20, 10:00 AM",
    "Duration": "95 days 57min 20sec",
    "CreatedBy": "bwightman",
    "AssignedTo": "bwightman",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 38,
    "Tasks": [],
    "Caller": "Task for Ticket",
    "CreatedDate": "6/15/20, 11:21 AM",
    "ResolvedDate": "",
    "DueDate": "6/15/20, 10:00 AM",
    "Duration": "95 days 3hrs 55min 1sec",
    "CreatedBy": "kfollett",
    "AssignedTo": "kfollett",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 36,
    "Tasks": [],
    "Caller": "Task for fixing GroupOrUserSelector",
    "CreatedDate": "6/11/20, 2:37 PM",
    "ResolvedDate": "",
    "DueDate": "6/11/20, 10:00 AM",
    "Duration": "99 days 39min 20sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 33,
    "Tasks": [],
    "Caller": "Ram 3500",
    "CreatedDate": "6/10/20, 3:28 PM",
    "ResolvedDate": "",
    "DueDate": "6/10/20, 10:00 AM",
    "Duration": "99 days 23hrs 48min 36sec",
    "CreatedBy": "dgood",
    "AssignedTo": "dgood",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 32,
    "Tasks": [],
    "Caller": "do this",
    "CreatedDate": "6/8/20, 4:18 PM",
    "ResolvedDate": "7/20/20, 11:31 AM",
    "DueDate": "6/8/20, 10:00 AM",
    "Duration": "41 days 19hrs 12min 56sec",
    "CreatedBy": "kfollett",
    "AssignedTo": "kfollett",
    "Priority": "",
    "Status": "Resolved"
  },
  {
    "Id": 31,
    "Tasks": [],
    "Caller": "task a for kevin",
    "CreatedDate": "6/5/20, 10:55 AM",
    "ResolvedDate": "8/3/20, 10:19 AM",
    "DueDate": "6/5/20, 10:00 AM",
    "Duration": "58 days 23hrs 24min 13sec",
    "CreatedBy": "kfollett",
    "AssignedTo": "kfollett",
    "Priority": "",
    "Status": "Resolved"
  },
  {
    "Id": 30,
    "Tasks": [],
    "Caller": "Ram 3500 2",
    "CreatedDate": "6/4/20, 10:36 AM",
    "ResolvedDate": "",
    "DueDate": "6/4/20, 10:00 AM",
    "Duration": "106 days 4hrs 40min 27sec",
    "CreatedBy": "kfollett",
    "AssignedTo": "kfollett",
    "Priority": "",
    "Status": "Open"
  },
  {
    "Id": 29,
    "Tasks": [],
    "Caller": "",
    "CreatedDate": "6/3/20, 11:05 AM",
    "ResolvedDate": "6/3/20, 11:16 AM",
    "DueDate": "6/3/20, 10:00 AM",
    "Duration": "11min 21sec",
    "CreatedBy": "kfollett",
    "AssignedTo": "kfollett",
    "Priority": "",
    "Status": "Resolved"
  },
  {
    "Id": 25,
    "Tasks": [],
    "Caller": "",
    "CreatedDate": "6/2/20, 10:41 AM",
    "ResolvedDate": "",
    "DueDate": "6/2/20, 10:00 AM",
    "Duration": "108 days 4hrs 35min 1sec",
    "CreatedBy": "bwightman",
    "AssignedTo": "",
    "Priority": "",
    "Status": ""
  },
  {
    "Id": 24,
    "Tasks": [],
    "Caller": "TESTING",
    "CreatedDate": "6/2/20, 10:13 AM",
    "ResolvedDate": "",
    "DueDate": "6/2/20, 10:00 AM",
    "Duration": "108 days 5hrs 3min 27sec",
    "CreatedBy": "dteeter",
    "AssignedTo": "",
    "Priority": "",
    "Status": ""
  },
  {
    "Id": 23,
    "Tasks": [],
    "Caller": "",
    "CreatedDate": "6/2/20, 10:12 AM",
    "ResolvedDate": "",
    "DueDate": "6/2/20, 10:00 AM",
    "Duration": "108 days 5hrs 4min 13sec",
    "CreatedBy": "dteeter",
    "AssignedTo": "",
    "Priority": "",
    "Status": ""
  }
];


@Component({
  selector: 'plx-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  filters = {
    priority: null,
    status: null,
    createddate: null,
    createdby: null
  };
  dataSource = TEST_DATA;
  displayedColumns = [
    'Id',
    'Tasks',
    'CallerName',
    'CreatedDate',
    'ResolvedDate',
    'Duration',
    'CreatedBy',
    'Priority',
    'Status'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
