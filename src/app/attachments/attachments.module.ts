import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AttachmentsComponent } from './attachments/attachments.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { AttachmentEditorComponent } from './attachment-editor/attachment-editor.component';



@NgModule({
  declarations: [AttachmentsComponent, AttachmentComponent, AttachmentEditorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AttachmentsComponent]
})
export class AttachmentsModule { }
