import { Component, OnInit } from '@angular/core';
import {MembersComponent} from "../members/members.component";
import {MemberProfileService} from '../member-profile.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-imwut2017aug',
  templateUrl: './imwut2017aug.component.html',
  styleUrls: ['./imwut2017aug.component.scss']
})
export class Imwut2017augComponent implements OnInit {

  navElements = [
    {
      text: "Info",
      link: "section_info"
    },
    {
      text: "Abstract",
      link: "section_abstract"
    },
    {
      text: "Supplemental",
      link: "section_supplementary"
    },
    {
      text: "Authors",
      link: "section_authors"
    },
    {
      text: "Acknowledgment",
      link: "section_acknowledgment"
    },

  ]

  dataset = [
    {
      name: "Preliminary App Market Analysis Result",
      links: [{name:"Excel", link:"/assets/files/omnitrack_imwut2017aug_app_analysis_result.xlsx"}]
    },

    {
      name: "Usability Study Task Scenarios and Requirements",
      links: [{name:"PDF", link:"/assets/files/omnitrack_imwut2017aug_usability_study_tasks.pdf"}]
    },

    {
      name: "Deployment Study Participants Information",
      links: [{name:"Excel", link:"/assets/files/omnitrack_imwut2017aug_deployment_study_participants_dataset.xlsx"}]
    }
  ]

  constructor(private shared: SharedService, public memberProfile: MemberProfileService) { }

  ngOnInit() {
    this.shared.setGnbElements(this.navElements, ['./ubicomp2017'])
  }

}
