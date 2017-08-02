import { Component, OnInit } from '@angular/core';
import {MemberProfileService} from '../member-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MemberProfileService]
})
export class HomeComponent implements OnInit {

  members: Array<any>
  alumni: Array<any>

  id_features = "section_features"
  id_about = "section_about"
  id_team = "section_team"
  id_ack = "section_ack"
  id_publications = "section_publications"

  navElements = [
    {
      text: "About",
      link: "#"+this.id_about
    },
    {
      text: "Features",
      link: "#"+this.id_features
    },{
      text:"Publications",
      link: "#"+this.id_publications
    },
    {
      text: "Team",
      link: "#"+this.id_team
    },
    {
      text:"Acknowledgement",
      link: "#"+this.id_ack
    }
  ]

  constructor(private memberProfile: MemberProfileService) { }

  ngOnInit() {
    this.members = [this.memberProfile.yhkim, this.memberProfile.blee, this.memberProfile.echoe, this.memberProfile.jseo]
    this.alumni = [this.memberProfile.jhjeon]
  }

}
