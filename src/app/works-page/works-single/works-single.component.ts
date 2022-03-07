import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from 'src/app/works.service';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'app-works-single',
  templateUrl: './works-single.component.html',
  styleUrls: ['./works-single.component.scss'],
})
export class WorksSingleComponent implements OnInit {
  // @ts-ignore
  work;
  id: any;
  // @ts-ignore
  lang;

  constructor(
    private worksService: WorksService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  // @ts-ignore
  sanitizeUrl(work) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://' + work + '/'
    );
  }

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'it';

    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.worksService.getSingleWork(this.id).subscribe((work) => {
      this.work = work;
    });
  }
}
