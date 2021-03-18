import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { deleteComponent } from './delete.component';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  data : any;
  constructor(private auth: AuthService,
    private router: Router,
    private dialog: MatDialog) { 
    // auth.callapi().subscribe(val => {
    //   this.data = val
    // }) 
  }
  ngOnInit(): void {
    this.auth.callapi().subscribe(val => {
      this.data = val
    })
  }
  showdetails(id:number){
    this.router.navigate(["/userdetails", id])
  }
  deleteUser(id: number){
    //
    const dialogRef = this.dialog.open(deleteComponent);
    dialogRef.afterClosed().subscribe(val => {
      console.log(val)
      if(val){
        console.log("deleteing user")
        this.auth.delUser(id).subscribe(res =>{
          console.log(res)
        })
        this.ngOnInit()
      }else{
        console.log("do not delete")
      }
    })
    //

    
  }
  

}
