import { slidelist } from './../models/slides';
import { Slide } from './../models/Slide';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor() { }

  getSlide(id: number): Observable<Slide> {
    // tslint:disable-next-line:no-shadowed-variable
    return of(slidelist.find(Slide => Slide.id === id));
  }
  getSlides(): Slide[] {
    return slidelist;
  }
}
