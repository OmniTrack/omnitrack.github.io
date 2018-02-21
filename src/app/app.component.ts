import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from "./shared.service";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  @Input () gnbElements = [];

  constructor(private shared: SharedService, private router: Router)
  {
    this.shared.gnbElementChanged.subscribe(elements=> {
      setTimeout(()=>{
        this.gnbElements = elements
      })
    })
  }

  ngOnInit(): void {
    this.gnbElements = this.shared.currentGnbElements()
  }
}
