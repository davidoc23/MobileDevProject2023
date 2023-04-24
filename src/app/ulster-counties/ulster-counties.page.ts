import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulster-counties',
  templateUrl: './ulster-counties.page.html',
  styleUrls: ['./ulster-counties.page.scss'],
})
export class UlsterCountiesPage implements OnInit {

  counties: string[] = ["Donegal", "Cavan", "Monaghan", "Fermanagh", "Tyrone", "Derry", "Antrim", "Down", "Armagh"];

  constructor() { }

  ngOnInit() {
  }

}
