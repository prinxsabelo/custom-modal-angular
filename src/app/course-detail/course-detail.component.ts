import { Component, Input } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styles: [],
})
export class CourseDetailComponent {
  public course;
  constructor(public config: DialogConfig, public dialog: DialogRef) {
    console.log(config);
    this.course = config.data.course;
  }

  onClose(): void {
    this.dialog.close('do something');
  }
}
