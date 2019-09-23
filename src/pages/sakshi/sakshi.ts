import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SakshiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sakshi',
  templateUrl: 'sakshi.html',
})
export class SakshiPage {
public text: string;
public number: number;
uname: any;
messageList= [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              ) {
    this.text= this.navParams.get('text');
    this.number=this.navParams.get('number');
    this.messageList=this.navParams.get('messageList');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SakshiPage');
    
  }

}
