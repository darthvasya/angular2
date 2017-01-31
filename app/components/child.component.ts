import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: 'app/templates/child.template.html',
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    name: string = "Евгений";
}
