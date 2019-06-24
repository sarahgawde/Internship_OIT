import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  constructor() { }
  source:string;
  
  
  ngOnInit() {
    
  }
  done(x) {
    console.log("Hi");
    if (x == 1) {
      console.log("Hello");
     this.source=(<HTMLImageElement>document.getElementById('html')).src='./assets/images/success.png';
     var val=(<HTMLInputElement>document.getElementById('progress')).value="30";
    }
    else if (x == 2) {
        this.source=(<HTMLImageElement>document.getElementById('css')).src='./assets/images/success.png';
        var val=(<HTMLInputElement>document.getElementById('progress')).value="70";
    }
    else if (x == 3) {
     this.source=(<HTMLImageElement>document.getElementById('javascript')).src='./assets/images/success.png';
        var val=(<HTMLInputElement>document.getElementById('progress')).value="100";
        
    }
  }

}
