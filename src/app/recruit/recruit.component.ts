import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.scss']
})
export class RecruitComponent implements OnInit {

  mobile = []
  desktop = []

  constructor(private meta: Meta) {
    meta.removeTag("property='og:title'")
    meta.removeTag("property='og:description'")
    meta.removeTag("property='og:image'")
    
    meta.addTag({property: "og:title", content: "하루 10분, 나만의 생산성 찾기 프로젝트 실험 참가자 모집"}, true)
    meta.addTag({property: "og:image", content: "https://omnitrack.github.io/assets/images/recruit/mobile/poster_mobile_0.jpg"}, true)
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
