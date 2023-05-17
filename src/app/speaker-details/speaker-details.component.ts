import { Component, Input } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Speaker } from '../shared/speaker';

@Component({
  selector: 'speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent {

  @Input() speaker: Speaker | undefined;

  constructor(private navigationService: NavigationService) { }

  goToList() {
    this.navigationService.goToList();
  }
}
