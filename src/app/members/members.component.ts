import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  @Input() title = "The OmniTrack Team"

  @Input() members

  @Input() alumni

  @Input() contributors

  constructor() {
  }

  ngOnInit() {
  }

}
