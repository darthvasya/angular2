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
    increase($event) :void {
      this.count++;
      console.log($event);
      console.log("name: " + this.name);
    }
}
