import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-default',
  templateUrl: './ng-switch-default.component.html',
  styleUrls: ['./ng-switch-default.component.css']
})
export class NgSwitchDefaultComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
