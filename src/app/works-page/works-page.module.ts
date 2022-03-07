import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksPageRoutingModule } from './works-page-routing.module';
import { WorksListComponent } from './works-list/works-list.component';
import { WorksSingleComponent } from './works-single/works-single.component';


@NgModule({
  declarations: [
    WorksListComponent,
    WorksSingleComponent
  ],
  imports: [
    CommonModule,
    WorksPageRoutingModule
  ]
})
export class WorksPageModule { }
