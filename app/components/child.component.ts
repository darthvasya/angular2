import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: 'app/templates/child.template.html',
    styles: [`h2, p {color:blue;}`]
})
export class ChildComponent {
    name: string = "Евгений";
    clicks: number = 0;
    @Input() secondName: string = "ss";
    onChanged(increased) {
      console.log(increased);
      increased == true ? this.clicks++ : this.clicks--;
    }
}
