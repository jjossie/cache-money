import { Component, Input} from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-nudge-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './nudge-card.component.html',
  styleUrl: './nudge-card.component.scss'
})
export class NudgeCardComponent {
  @Input() nudgeContent : string = '';
  @Input() nudges : number = 1;

}
