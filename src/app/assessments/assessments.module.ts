import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentsComponent } from './assessments/assessments.component';
import { AssessmentComponent } from './assessment/assessment.component';

import { AssessmentsRoutingModule } from './assessments-routing.module';

@NgModule({
  declarations: [AssessmentsComponent, AssessmentComponent],
  imports: [
    AssessmentsRoutingModule,
    CommonModule
  ]
})
export class AssessmentsModule { }
