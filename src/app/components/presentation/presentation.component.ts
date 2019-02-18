
import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Slide } from './../../models/Slide';
import { SlideService } from './../../services/slide.service';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  slide: Slide;
  slideslist: Slide[];
  nextLink: string;
  prvLink: string;
  constructor(
    private route: ActivatedRoute,
    private SService: SlideService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSlide();
    this.getSlides();
    this.setpages();
  }
  getSlide(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SService.getSlide(id)
    .subscribe(slide => this.slide = slide);
  }
  getSlides(): void {
    this.slideslist = this.SService.getSlides();
  }
  setpages(): void {
    const nextId = this.slide.id + 1;
    const prvId = this.slide.id - 1;
    this.nextLink = '/presentation/' + nextId.toString();
    this.prvLink = '/presentation/' + prvId.toString();
    if (prvId <= 0) {
      this.prvLink = '/presentation/' + this.slide.id.toString();
    }
    if (nextId >= 16) {
      this.nextLink = '/presentation/' + this.slide.id.toString();
    }
  }
    }


