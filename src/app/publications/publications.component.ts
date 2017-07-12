import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  @Input() title = "Publications"

  constructor() { }

  ngOnInit() {
  }

}
