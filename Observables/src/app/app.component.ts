import { Component, OnInit } from '@angular/core';

import {ActivateService} from './activate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activateUser: boolean = false;
  constructor(private activateService: ActivateService) {}

  ngOnInit() {
    //subscribe activate user
    this.activateService.isActivated.subscribe(activateValue => {
      this.activateUser = activateValue;
    })
    
  }
}
