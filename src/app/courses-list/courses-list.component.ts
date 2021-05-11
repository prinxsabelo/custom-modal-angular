import { Component, OnInit } from '@angular/core';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  constructor(public _dialogService: DialogService) {}
  public courses = [
    {
      image: '',
      title: 'Equality and Diversity',
      description: [
        { label: 'Equality and Diversity introduction' },
        { label: 'Equality and Diversity' },
        { label: 'Equality, Diversity and inclusion' },
      ],
    },
    {
      image: '',
      title: 'Web Flow',
      description: [
        { label: 'Digest web' },
        { label: 'Edit web' },
        { label: 'Simplify web' },
      ],
    },
  ];
  ngOnInit(): void {
    console.log(this.courses);
  }
  viewCourse(course) {
    const ref = this._dialogService.open(CourseDetailComponent, {
      data: {
        course,
      },
    });
  }
}
