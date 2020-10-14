import { Component, OnInit } from '@angular/core';
import { Attachment } from '../../models/attachment';

@Component({
  selector: 'plx-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {

  attachments: Attachment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addAttachment() {
    let id = 0;
    this.attachments.forEach(a => id = parseInt(a.StorageFile.Id) > id ? parseInt(a.StorageFile.Id) : id);
    this.attachments.push({
      StorageFile: {
        Id: `${id + 1}`,
        ContentType: 'text/csv',
        Description: `a description for file ${id + 1}`,
        ReceivedBy: 'dgood',
        ReceivedDate: new Date(Date.now()),
        Size: 20
      }
    });
  }
}
