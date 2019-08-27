import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContainerService } from '../container.service';

@Component({
  selector: 'app-containertop',
  templateUrl: './containertop.component.html',
  styleUrls: ['./containertop.component.scss']
})
export class ContainertopComponent implements OnInit {
  form = new FormGroup(
    {
      'textInput': new FormControl('',[])
    }
   );
  constructor(private containerService:ContainerService) { }
  ngOnInit() {
  }
  
  get text():FormControl {
    return <FormControl> this.form.controls.textInput;
  }
  
  onButtonClick(){
    this.containerService.emitdata(this.text.value);
  }
}
