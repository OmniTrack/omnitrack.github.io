import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.scss']
})
export class AcknowledgementComponent implements OnInit {

  mockups : Array<string>

  constructor() { }

  ngOnInit() {

    this.mockups = [
      "http://www.titanui.com/49889-galaxy-s6-edge-in-hand-mockup-psd/",
      "https://lstore.graphics/freebies/iphone_7/",
      "https://www.mockupdeals.com/free-mockup-htc-android-brainstorming/",
      "https://dribbble.com/shots/2433989-Android-Device-Mockups",
      "http://www.72pxdesigns.com/template/google-pixel-psd-mockup-front/"
    ]
  }

}
