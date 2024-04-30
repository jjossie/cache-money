import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-nudge-card',
  templateUrl: './nudge-card.component.html',
  styleUrl: './nudge-card.component.scss'
})
export class NudgeCardComponent {
  @Input() nudgeContent : string = '';
  @Input() nudges : number = 1;

}
