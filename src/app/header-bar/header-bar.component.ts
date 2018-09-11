import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Input() elements = []
  @Input() route = ['./main']

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClicked(hash: string){
    this.router.navigate(this.route, {fragment: hash})
  }

}
