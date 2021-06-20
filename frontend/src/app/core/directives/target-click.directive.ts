import {Directive, HostListener, Input} from '@angular/core';
import {GoogleAnalyticsService} from '@trungk18/core/services/google-analytics.service';

@Directive({
  selector: '[targetClick]'
})
export class TargetClickDirective {
  @Input() targetEventName: string;
  @Input() targetEventCategory: string = 'button';

  constructor(private _googleAnalytics: GoogleAnalyticsService) {
  }

  @HostListener('click') onClick($event) {
    this._googleAnalytics.sendEvent(this.targetEventName, this.targetEventCategory);
  }
}
