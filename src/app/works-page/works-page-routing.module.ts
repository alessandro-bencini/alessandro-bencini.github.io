import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksListComponent } from './works-list/works-list.component';
import { WorksSingleComponent } from './works-single/works-single.component';

const routes: Routes = [
  {
    path: '',
    component: WorksListComponent,
  },
  {
    path: ':id',
    component: WorksSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksPageRoutingModule {}
