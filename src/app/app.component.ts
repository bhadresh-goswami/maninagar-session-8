import { Component } from '@angular/core';
import { UserModel } from './Models/user-model';
import {EmailValidatorN} from './emailvalidator.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user:UserModel = new UserModel();
  data = "";
  data1 = "";
  title = 'appTestNew';
  SaveRegistration(){

    console.log(this.user);
    this.user = new UserModel();
    alert("Work Complete!");
  }

  changeIt(data){
    console.log(data);
  }

  keyupAction()
  {
    console.log("Keu up !");
  }
  keyDownAction()
  {
    console.log("Keu Down !");
  }


  keyPress(){
    console.log("Keu press !");

  }

  keyPressEvent(event:any)
  {
    console.log(event.target.value);
  }
}
