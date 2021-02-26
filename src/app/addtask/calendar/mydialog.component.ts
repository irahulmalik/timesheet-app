import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {MatDialogModule} from "@angular/material/dialog"

@Component({
    selector: "app-dialog",
    template:`<h1 mat-dialog-title>Do You want to copy this data</h1>
    <mat-dialog-content *ngIf="(passedData.workdetails == undefined)">
        <p>No data present</p>
    </mat-dialog-content>
    <mat-dialog-content *ngIf="(passedData.workdetails != undefined)">
        <p>Task Name = {{passedData.workdetails.taskname}}</p>
        <p>WON = {{passedData.workdetails.won}}</p>
        <p>Duration = {{passedData.workdetails.duration}}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Yes</button>
        <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
                    `
})
export class dialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any){
    }
}