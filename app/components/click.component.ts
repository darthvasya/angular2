import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'click-comp',
  templateUrl: 'app/templates/click.template.html',
  styleUrls: ['app/css/click.css']
})

export class ClickComponent {
  @Input() userName: string = "";
  @Input() name: string = "Clcik component";
  @Output() userNameChange = new EventEmitter<string>();

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased): void {
    console.log(this);
    this.onChanged.emit(increased);
  }
  onNameChange(model: string): void {
    console.log(this);
    this.userName = model;
    this.userNameChange.emit(model);
  }

}
