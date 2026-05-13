import { booleanAttribute, Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { courses } from '../model/coursedb';

@Directive({
  selector: '[IdIsExist]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: IdIsExistDirective,
    multi: true
  }]
})
export class IdIsExistDirective implements Validator {

  @Input({alias: "IdIsExist", transform: booleanAttribute}) isNew: boolean = false;
  constructor() { }

  CheckIDExist(id: string): boolean {
    let db = courses;
    let course = db.find((c) => c.courseId === id);
    return (course != null || course != undefined)
  }


  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.isNew)
      return null;

    let value = control.value;
    let result = null;
    if (this.CheckIDExist(value)) {
      result = {
        "IdIsExist": {
          "actualValue": value,
          "requiredValue": `課程編號 ${value} 已經存在，請重新編號`
        }
      }
    }
    return result;

  }

}
