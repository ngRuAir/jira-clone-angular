import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'j-snow',
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnowComponent {
  public snowCount: number[] = new Array(200).fill(0);
}
