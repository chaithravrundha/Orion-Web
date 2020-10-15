import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentsComponent } from './assessments/assessments.component';
import { AssessmentComponent } from './assessment/assessment.component';

import { AssessmentsRoutingModule } from './assessments-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ResizableModule } from 'angular-resizable-element';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [AssessmentsComponent, AssessmentComponent],
  imports: [
    AssessmentsRoutingModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ResizableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AssessmentsModule { }
