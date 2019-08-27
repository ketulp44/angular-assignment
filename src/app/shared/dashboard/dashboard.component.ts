import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sideBar: boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar(value){
    this.sideBar=value;
  }
}
