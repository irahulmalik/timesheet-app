import { Component } from "@angular/core";


@Component({
    selector: "app-dialog",
    template:`<h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>
        <p>Are you sure you want to delete user??</p>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Yes</button>
        <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
                    `
})
export class deleteComponent {
    constructor(){
    }
}