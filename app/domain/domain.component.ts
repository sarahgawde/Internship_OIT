import { Component, OnInit } from '@angular/core';
import { DominDetailsService } from '../domin-details.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  constructor(private domainData : DominDetailsService) { }
  domainDetail:any = [];
  ngOnInit() {
    this.domainData.getDomainDetails().subscribe(
      data => {
        console.log(data);
        this.domainDetail = data;
      }, err => {
        console.log(err);
      })
  }


}
