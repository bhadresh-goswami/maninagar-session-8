import { Directive } from '@angular/core';
import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  FormControl,  
  ValidatorFn,  
  Validator  
 } from '@angular/forms';



@Directive({
  selector: '[EmailValidatorN][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorN,
      multi: true
    }
  ]
})

export class EmailValidatorN implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.emailValidator();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }
  emailValidator(): ValidatorFn {
    return (c: FormControl) => {
      //console.log(c.valid);
      let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
      if (isValid) {
        return {
          emailvalidator: {
            valid: true
          }
        };


      } else {
        return {
          emailvalidator: {
            valid: false
          }
        };
      }
    }
  }
}