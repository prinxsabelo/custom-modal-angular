import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesListModule } from './courses-list/courses-list.module';
import { DialogModule } from './dialog/dialog.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [AppComponent, CourseDetailComponent],
  imports: [BrowserModule, DialogModule, CoursesListModule],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CourseDetailComponent],
})
export class AppModule {}
