import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/works.service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss'],
})
export class WorksListComponent implements OnInit {
  // @ts-ignore
  works;
  routeDirect = '/works-page/';

  constructor(private worksService: WorksService) {}

  ngOnInit() {
    this.works = this.worksService.getWorks(20);
  }
}
