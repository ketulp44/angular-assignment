import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }
@Output() toggle = new EventEmitter();
  showSidebar = false;
  ngOnInit() {
  }
  logout(){
    console.log('inside logout');    
    this.authService.logout();
    this.router.navigate(['login']);
  }
  toggleSidebar(){
    this.showSidebar=!this.showSidebar;
    this.toggle.emit(this.showSidebar);
  }
}
