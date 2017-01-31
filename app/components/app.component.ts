import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    styleUrls: ['app/css/style.css']
})
export class AppComponent {
    name: string = 'Petya';
    age: number = 12;
    count: number = 0;
    secName: string = "sfdas";
    increase($event) :void {
      this.count++;
      console.log(this);
      console.log($event);
      console.log("name: " + this.name);
    }
}
