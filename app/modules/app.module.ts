import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './../components/app.component';
import { ChildComponent } from './../components/child.component';
import { ClickComponent } from './../components/click.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ChildComponent, ClickComponent ],
    bootstrap:    [ AppComponent ],
    exports:      [ ],
    providers:    [ ]
})
export class AppModule { }
