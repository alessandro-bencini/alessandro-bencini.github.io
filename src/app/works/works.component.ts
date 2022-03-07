import { Component, OnInit } from '@angular/core';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  // @ts-ignore
  works;
  routeDirect = '/works-page/';

  constructor(private worksService: WorksService) {}

  ngOnInit() {
    this.works = this.worksService.getWorks(3);
  }
}
