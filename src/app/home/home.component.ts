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

  constructor(private memberProfile: MemberProfileService) { }

  ngOnInit() {
    this.members = [this.memberProfile.yhkim, this.memberProfile.blee, this.memberProfile.echoe, this.memberProfile.jseo]
    this.alumni = [this.memberProfile.jhjeon]
  }

}
