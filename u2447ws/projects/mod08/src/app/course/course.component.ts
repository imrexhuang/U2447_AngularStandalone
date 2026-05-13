import { DatePipe, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Course } from '../model/course';
import { courses, locations } from '../model/coursedb';
import { IdIsExistDirective } from './id-is-exist.directive';
import { CheckEndDateDirective } from './check-end-date.directive';


@Component({
  selector: 'app-course',
  imports: [FormsModule, JsonPipe, DatePipe, IdIsExistDirective, CheckEndDateDirective],
  templateUrl: './course.component.html',
  styles: ``
})
export class CourseComponent {
  isNew: Boolean = false;
  course = signal<Course>(courses[0]);
  locations = locations;
  submitted: Boolean = false;
  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.isNew = false;
    this.submitted = true;
  }

  formatDate(date: Date | undefined) {
    return date?.toISOString().substring(0, 10);
  }
  get startDate(): string | undefined {
    if (!this.course().startDate) return undefined;
    return this.formatDate(this.course().startDate);
  }
  set startDate(date: string) {
    if (!date) {
      this.course().startDate = undefined;
      return;
    }
    this.course().startDate = new Date(date);
  }
  get endDate(): string | undefined {
    if (!this.course().endDate) return undefined;
    return this.formatDate(this.course().endDate);
  }
  set endDate(date: string) {
    if (!date) {
      this.course().endDate = undefined;
      return;
    }
    this.course().endDate = new Date(date);
  }


  newCourse() {
    this.isNew = true;
    this.course = signal<Course>({ courseId: '', courseName: '', hours: 0 });
  };

}
