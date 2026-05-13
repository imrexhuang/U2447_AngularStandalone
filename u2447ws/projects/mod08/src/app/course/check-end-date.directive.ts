import { formatDate } from '@angular/common';
import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[CheckEndDate]', 
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckEndDateDirective,
    multi: true
  }]
})
class CheckEndDateDirective implements Validator {
  @Input('CheckEndDate') dateCtlsName: string[] = [];
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.dirty) return null;
    let startCtlName: string = this.dateCtlsName[0],
      endCtlName: string = this.dateCtlsName[1]
    const startCtl = control.get(startCtlName);
    const endCtl = control.get(endCtlName);
    let result = null;
    if (startCtl && endCtl) {
      let startDate = new Date(startCtl.value);
      let endDate = new Date(endCtl.value);
      if (endDate < startDate) {        
        result = {
          "CheckEndDate": {
            "actualValue": `起始日期: ${startDate}, 截止日期: ${endDate}`,
          "requiredValue": `結束日期 [${formatDate(endDate,'yyyy-MM-dd','en-US')}] 
                    必須大於開始日期`          }
        };          
        endCtl.setErrors(result);
      }
    }
    return result;
  }


}
