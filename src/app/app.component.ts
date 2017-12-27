import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*Point to remember if ngModel is been used then add Formsmodule in app.module.ts*/
  /* Variabledeclaration*/
  status: boolean;
  titledsp: string;
  firstname: string;
  lastname: string;

  /* Method which will beexecuted once*/
  ngOnInit() {
      this.titledsp = `Mr/Mrs`;
      this.firstname = `FirstName`;
      this.lastname = `LastName`;
  }

  /* Function evoked on button clicking */
  onclick() {
    /*Setting condition for *ngIf*/
    this.status = true;
  }

}
