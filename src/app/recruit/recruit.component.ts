import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.scss']
})
export class RecruitComponent implements OnInit {

  mobile = []
  desktop = []

  constructor() {
   }

  ngOnInit() {
    for ( let i = 0; i < 8; i++) {
      this.mobile.push("poster_mobile_" + i + ".jpg")
    }

    for ( let i = 0; i < 4; i++) {
      this.desktop.push("desktop_" + i + ".jpg")
    }

  }

}
