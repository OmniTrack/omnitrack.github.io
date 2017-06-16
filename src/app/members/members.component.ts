import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['../style_common.scss', './members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Array<any>

  constructor() {

    this.members = [
      {
        name: "Young-Ho Kim",
        title: "Ph.D Candidate",
        affiliation: "Seoul National University",
        email: "yhkim (at) hcil.snu.ac.kr",
        web: "http://younghokim.net"
      },
      {
        name: "Bongshin Lee",
        title: "Senior Researcher",
        affiliation: "Microsoft Research",
        email: "bongshin (at) microsoft.com",
        web: "http://bongshiny.com"
      },
      {
        name: "Eun Kyoung Choe",
        title: "Assistant Professor",
        affiliation: "The Pennsylvania State University",
        email: "echoe (at) ist.psu.edu",
        web:"https://faculty.ist.psu.edu/choe/"
      },
      {
        name: "Jinwook Seo",
        title: "Associate Professor",
        affiliation: "Seoul National University",
        email: "jseo (at) snu.ac.kr",
        web:"http://hcil.snu.ac.kr/people/jinwook-seo"
      }
    ]
  }

  ngOnInit() {
  }

}
