import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArrayIdFindPipe} from './array-id-find.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ArrayIdFindPipe],
  exports: [ArrayIdFindPipe]
})
export class ArrayIdFindModule {
}
