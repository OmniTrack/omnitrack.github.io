import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  externalServices

  constructor() { }

  ngOnInit() {
    this.externalServices = [
      {
        name: "Google Fit",
        logo: "google_fit.png",
        link: "https://www.google.com/fit/",
        measures: ["Step count"]
      },
      {
        name: "Fitbit",
        logo: "fitbit.png",
        link: "https://www.fitbit.com",
        measures: ["Step count", "Distance", "Sleep time", "Heart Rate"]
      },

      {
        name: "Jawbone UP",
        logo: "jawbone.png",
        link: "https://jawbone.com/",
        measures: ["Step count", "Distance"]
      },
      
      {
        name: "Misfit",
        logo: "misfit.png",
        link: "https://misfit.com/",
        measures: ["Step count", "Distance", "Sleep time"]
      },

      {
        name: "RescueTime",
        logo: "rescuetime.png",
        link: "https://www.rescuetime.com/",
        measures: ["Productivity Score", "Computer Usage Duration"]
      },

    ]
  }

}
