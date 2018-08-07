import { Component, NgModule } from "../../../node_modules/@angular/core";
import {MatButtonModule} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule
    ],
    exports: [
        MatButtonModule
    ]
})


export class SharedComponent{
}