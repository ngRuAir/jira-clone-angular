import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input() name: string;
  @Input() size = 16;
  @Input() fill = 'currentColor';
}
