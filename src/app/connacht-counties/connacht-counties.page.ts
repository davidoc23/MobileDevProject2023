import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connacht-counties',
  templateUrl: './connacht-counties.page.html',
  styleUrls: ['./connacht-counties.page.scss'],
})
export class ConnachtCountiesPage implements OnInit {

  counties: string[] = ["Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"];

  constructor() { }

  ngOnInit() {
  }

}
