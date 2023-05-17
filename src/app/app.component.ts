import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { Speaker } from './shared/speaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Frontend Coding Challenge';
  onDetails = false;
  speaker: Speaker | undefined;

  constructor(private navigationService: NavigationService) {
    this.navigationService.pages.subscribe(page => {
      this.onDetails = page === 'details';
      this.speaker = this.navigationService.speaker;
    });
  }
}
