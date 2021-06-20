import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IssuePriorityIcon} from '@trungk18/interface/issue-priority-icon';
import {ProjectConst} from '@trungk18/project/config/const';

type IssuePriorityMap = { [key: string]: IssuePriorityIcon };

@Component({
  selector: 'issue-priority-select',
  templateUrl: './issue-priority-select.component.html',
  styleUrls: ['./issue-priority-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// TODO implement ControlValueAccessor
export class IssuePrioritySelectComponent {
  @Input() control: FormControl;

  public priorities: IssuePriorityIcon[];
  public prioritiesMap: IssuePriorityMap = {};

  constructor() {
    this.priorities = ProjectConst.PrioritiesWithIcon;

    ProjectConst.PrioritiesWithIcon.forEach(p => {
      this.prioritiesMap[p.value] = p;
    });
  }
}
