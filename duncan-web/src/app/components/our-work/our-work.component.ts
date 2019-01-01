import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
