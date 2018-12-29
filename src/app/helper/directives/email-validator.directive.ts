import { Directive } from '@angular/core';
import { NG_VALIDATORS, EmailValidator, Validator, FormControl, ValidatorFn } from '../../../../node_modules/@angular/forms';

@Directive({
  selector: '[emailvalidator][ngModel]',
  providers: [  
    {  
     provide: NG_VALIDATORS,  
     useExisting: EmailValidator,  
     multi: true  
    } ] 
})
export class EmailValidatorDirective implements Validator {
  validator: ValidatorFn;

  constructor() {

    console.log("called");

    this.validator = this.emailValidator();  
console.log(`check this ${this.validate}`);
   }

   validate(c: FormControl) {  
    return this.validator(c);  
   }
   emailValidator(): ValidatorFn {  
    return (c: FormControl) => {  
     let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);  
     console.log(`check this ${isValid}`);

     if (isValid) { 
      console.log(`check this ${isValid}`);
 

      return null;  
    
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
