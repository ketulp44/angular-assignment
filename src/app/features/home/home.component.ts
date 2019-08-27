import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [
    {
      country: "india",
      states: [{
        state:"gujarat",
        images:["modhera.jpg","polo.jpg","somanath.jpg"]
      },
      {
        state:"rajashthan",
        images:["chittorgarh.png","kirti-stambh.jpg","rani-padamavati-fort.jpg"]
      }
    ]
    },
  {
    country:"usa",
    states:[{
      state:"california",
      images:["death-valley.jpg","golden-gate-bridge.jpg"]
    }]
  }];

  selectedImages: String[]=[];
  ngOnInit() {
    this.images.map((country)=>{      
      country.states.forEach((state)=>{
        state.images.forEach((image)=>{
          console.log('assets/images/'+country.country+'/'+state.state+'/'+image);
          
           this.selectedImages.push('assets/images/'+country.country+'/'+state.state+'/'+image);
        });
      });
    });
    console.log(this.selectedImages);
    
  }

}
