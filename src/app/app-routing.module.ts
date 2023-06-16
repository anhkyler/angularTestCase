import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitPreventionComparisionComponent } from './submit-prevention-comparision/submit-prevention-comparision.component';

const routes: Routes = [
  {
    component: SubmitPreventionComparisionComponent,
    path:'submitprevention'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
