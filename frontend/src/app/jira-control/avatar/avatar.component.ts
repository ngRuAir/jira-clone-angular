import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'j-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnChanges {
  @Input() avatarUrl: string;
  @Input() size = 12;
  @Input() rounded = true;
  @Input() className = '';

  public style: any;

  ngOnChanges(changes: SimpleChanges) {
    this.updateStyle();
  }

  private updateStyle() {
    this.style = {
      width: `${this.size}px`,
      height: `${this.size}px`,
      'background-image': `url('${this.avatarUrl}')`,
      'border-radius': this.rounded ? '100%' : '3px'
    };
  }
}
