import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss']
})
export class HttpDemoComponent implements OnInit {
students:any[] ;
form = new FormGroup({
'name':  new FormControl('',[]),
'surname': new FormControl('',[]),
'address': new FormControl('',[]),
'standard': new FormControl('',[])
});
constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe((data)=>{
      this.students =data;
    });
  }
get name(): FormControl{
  return <FormControl>this.form.controls.name;
}
get surname(): FormControl{
  return <FormControl>this.form.controls.surname;
}
get address(): FormControl{
  return <FormControl>this.form.controls.address;
}
get standard(): FormControl{
  return <FormControl>this.form.controls.standard;
}

submit(){
  if(this.form.valid){
    let student = {
        'name':this.name.value,
        'surname':this.surname.value,
        'address':this.address.value,
        'standard':this.standard.value

    };
    console.log(student);
    
    this.studentService.saveStudent(student).subscribe((data)=> {
      console.log('saved');
    },(error)=>{
      console.log("error"+ error);
      
    },()=>{
      console.log("completed");      
    });
  }
}

}
