import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-counties',
  templateUrl: './counties.page.html',
  styleUrls: ['./counties.page.scss'],
})
export class CountiesPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  onButtonClick1(){
    this.navCtrl.navigateForward('/ulster-counties')
  }
  onButtonClick2(){
    this.navCtrl.navigateForward('/munster-counties')
  }
  onButtonClick3(){
    this.navCtrl.navigateForward('/connacht-counties')
  }
  onButtonClick4(){
    this.navCtrl.navigateForward('/leinster-counties')
  }

  ngOnInit() {
  }

}
