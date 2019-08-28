import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carouselExampleIndicators') el:ElementRef;
  disabelState: boolean=true;
  constructor() { }
  selectedCountry:String;
  selectedState:String;
  color:String="red";
  images = [
    {
      country: "india",
      states: [{
        state:"gujarat",
        images:["modhera.jpg","polo.jpg","somanath.jpg"]
      },
      {
        state:"rajashthan",
        images:["Chittorgarh.png","kirti-stambh.jpg","rani-padamavati-fort.jpg"]
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
  states:any[]=[];
  countries :String[]=[];
  selectedImages: String[]=[];
  ngOnInit() {
    this.countries=this.images.map((image)=>{
      return image.country;
    });
    this.images.map((country)=>{      
      country.states.forEach((state)=>{
        state.images.forEach((image)=>{
          // console.log('assets/images/'+country.country+'/'+state.state+'/'+image);
          
           this.selectedImages.push('assets/images/'+country.country+'/'+state.state+'/'+image);
        });
      });
    });
    console.log(this.selectedImages);
    
  }
  onCountrySelect(value){
    if(value=="all"){
      this.selectedImages=[];
      this.images.map((country)=>{      
        country.states.forEach((state)=>{
          state.images.forEach((image)=>{            
             this.selectedImages.push('assets/images/'+country.country+'/'+state.state+'/'+image);
          });
        });
      });
      console.log(this.selectedImages);
      this.states=[];
      this.disabelState=true;
      return ;
    }
    this.disabelState=false;
    let country = this.images.find((country)=>{
      return country.country==value;
    });
    this.selectedCountry=value;
    console.log('country' + value);
    console.log(country);
    
    this.states= country.states.map((state)=>state.state);
    console.log(this.states);
    this.selectedImages=[];
    country.states.forEach((state)=>{
      state.images.forEach((image)=>this.selectedImages.push('assets/images/'+this.selectedCountry+'/'+state.state+'/'+image));
    });
    console.log(this.selectedImages);
    
          
  }
  onStateSelect(value){
    console.log('inside state click' +value);
    
    if(value=="all"){
      console.log('inside if');
      
      this.selectedImages=[];
      this.images.find((country)=>country.country==this.selectedCountry).states.forEach((state)=>{
        state.images.forEach((image)=>{            
           this.selectedImages.push('assets/images/'+this.selectedCountry+'/'+state.state+'/'+image);
        });
      });
      
      return ;
    }
    console.log('selected value'+ value);
    let imagesTobeSelected = this.images.find((country)=>country.country==this.selectedCountry) ;
    this.selectedImages = imagesTobeSelected.states.find((state)=>state.state==value).images.map((image)=>'assets/images/'+this.selectedCountry+'/'+value+'/'+image)
    console.log(this.selectedImages);
    
  }
  onSlide(){
    // this.el.nativeElement.
    console.log('slide');
    
  }
 
}
