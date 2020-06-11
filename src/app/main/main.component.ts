import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/animation';
import { ConversionsService } from '../services/conversions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class MainComponent implements OnInit {

  main = true;
  units: Boolean;
  materials: Boolean;
  spoon: Boolean;

  materialRequest = {material: "sucre", value: ""};
  matErrMess: string;
  materialResult = "";

  spoonRequest = {scale: "pincee", value: ""};
  spoonErrMess: string;
  spoonResult = "";

  request = {requestUnit: "Litre", responseUnit: "dl", value: ""}
  value: number;
  errMess: string;
  result: string = "";

  constructor(private conversionService: ConversionsService) { }

  ngOnInit(){
  }

  goToUnits(){
    this.main = false;
    this.units = true;
    this.materials = false;
    this.spoon = false;
  }

  goToMaterials(){
    this.main = false;
    this.units = false;
    this.materials = true;
    this.spoon = false;
  }

  goToSpoon(){
    this.main = false;
    this.units = false;
    this.materials = false;
    this.spoon = true;
  }

  backToMain(){
    this.main = true;
    this.units = false;
    this.materials = false;
    this.spoon = false;
  }

  playWithMaterial(request) {
    this.conversionService.getMaterial(request)
    .subscribe(res => {
      console.log(res);
      this.materialResult = res;
    },
        errmess => {this.matErrMess = <any>errmess; this.materialResult = "Server Error"});
        console.log(this.matErrMess);
    
      }

  playWithSpoons(request) {
        this.conversionService.getSpoon(request)
        .subscribe(res => {
          this.spoonResult = res;
        },
            errmess => {this.spoonErrMess = <any>errmess; this.spoonResult = "Server Error"});
            console.log(this.spoonErrMess);
        
}

play(request) {
  console.log("req", request);
  this.conversionService.getConversion(request)
  .subscribe(res => {
    this.result = res;
  },
      errmess => {this.errMess = <any>errmess; this.result = "Server Error"});
  
    }


}
