import { Component} from "@angular/core";


@Component({
    selector: "app-delete-dialog",
    template:`<h1 mat-dialog-title>Do you want to delete this data?</h1>
    <mat-dialog-content>
        <p>Are You Sure</p>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Yes</button>
        <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
                    `
})
export class mydeletedialogComponent {
    constructor(){
    }
}