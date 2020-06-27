import { IssueType } from './issue';
import { IssueUtil } from '@trungk18/project/utils/issue';

export class IssueTypeWithIcon {
  value: string;
  icon: string;

  constructor(issueType: IssueType) {
    this.value = issueType;
    this.icon = IssueUtil.getIssueTypeIcon(issueType);
  }
}

export const IssueTypes: IssueTypeWithIcon[] = [
  new IssueTypeWithIcon(IssueType.BUG),
  new IssueTypeWithIcon(IssueType.STORY),
  new IssueTypeWithIcon(IssueType.TASK)
];