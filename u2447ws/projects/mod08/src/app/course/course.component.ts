import { DatePipe, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Course } from '../model/course';
import { courses, locations } from '../model/coursedb';

@Component({
  selector: 'app-course',
  imports: [FormsModule, JsonPipe, DatePipe],
  templateUrl: './course.component.html',
  styles: ``
})
export class CourseComponent {
  course = signal<Course>(courses[0]);
  locations = locations;
  submitted: Boolean = false;
  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.submitted = true;
  }

}
