import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {JUser} from '@trungk18/interface/user';

@Component({
  selector: 'issue-reporter-select',
  templateUrl: './issue-reporter-select.component.html',
  styleUrls: ['./issue-reporter-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueReporterSelectComponent {
  @Input() control: FormControl;
  @Input() users: JUser[];
}
