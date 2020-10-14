import { Component, OnInit } from '@angular/core';
import { Attachment } from 'src/app/models/attachment';

@Component({
  selector: 'plx-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

  attachment: Attachment = {
    StorageFile: {
      Id: '0',
      ContentType: 'text/csv',
      Description: 'my file description',
      ReceivedBy: 'dgood',
      ReceivedDate: new Date(Date.now()),
      Size: 20
    }
  };

  get Name(): string { return this.attachment.StorageFile.Description }
  set Name(value: string) { this.attachment.StorageFile.Description = value }

  constructor() { }

  ngOnInit(): void {
  }

}
