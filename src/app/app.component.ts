import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'timesheet-app';
  constructor(private auth: AuthService){
    let userdata = {Username: "admin",
      Password: "Admin",
      Role: "Manager"
    }
    auth.registerUser(userdata)
  }


}
