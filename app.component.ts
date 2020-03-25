import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regis';
  name:string=null;
  email:string=null;
  password:string=null;
  city:string=null;
  country:string=null;

}
