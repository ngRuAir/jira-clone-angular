import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'j-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
})
export class InputComponent implements ControlValueAccessor {
  @Input() containerClassName = '';
  @Input() icon: string;
  @Input() iconSize = 16;
  @Input() placeholder = '';
  @Input() enableClearButton: boolean;

  public value;

  get iconContainerWidth(): number {
    return this.iconSize * 2;
  }

  get isShowClearButton(): boolean {
    return this.enableClearButton && this.value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: string) {
    this.value = outsideValue;
  }

  updateValue(insideValue: string) {
    this.value = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }

  clear() {
    this.updateValue('');
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};
}
