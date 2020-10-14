import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentsComponent } from './assessments/assessments.component';

const assessmentsRoutes: Routes = [
  { path: 'assessments',  component: AssessmentsComponent },
  { path: 'assessments/:id', component: AssessmentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(assessmentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AssessmentsRoutingModule { }