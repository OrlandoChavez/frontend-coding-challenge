import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Speaker } from '../shared/speaker';

type Page = 'list' | 'details';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  pages: BehaviorSubject<Page>;
  speaker: Speaker | undefined;

  constructor() {
    this.pages = new BehaviorSubject<Page>('list');
  }

  goToDetails(speaker: Speaker) {
    this.speaker = speaker;
    this.pages.next('details');
  }

  goToList() {
    this.speaker = undefined;
    this.pages.next('list');
  }
}
