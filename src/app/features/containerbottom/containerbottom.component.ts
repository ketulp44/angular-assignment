import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../container.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-containerbottom',
  templateUrl: './containerbottom.component.html',
  styleUrls: ['./containerbottom.component.scss']
})
export class ContainerbottomComponent implements OnInit {
  data:any;
  constructor(private containerService: ContainerService) { }

  ngOnInit() {
this.data = this.containerService.data$;
  }

}
