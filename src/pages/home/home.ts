import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { SakshiPage } from '../sakshi/sakshi';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { CallNumber } from '@ionic-native/call-number';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public text: string;
  public number: number;
  formgroup: FormGroup;
  firstname: AbstractControl;
  contact: AbstractControl;
  messageList = [];
  PHONE: number;
  constructor(public navCtrl: NavController,
               public formbuilder:FormBuilder, 
               private dataprovider: DataProvider,
                private call: CallNumber) {
    
    this.getmessages()
    this.formgroup = formbuilder.group({
      firstname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      contact:['',Validators.required]

    });
     this.firstname = this.formgroup.controls['firstname'];
     this.contact = this.formgroup.controls['contact'];
  }
gotopage(){
  console.log("second page");
  this.navCtrl.push(SakshiPage,{text: this.text,number: this.number,messageList: this.messageList});
  
}
getmessages(){
  this.dataprovider.getmessage().subscribe(data => this.messageList =[data]);
}
async callNumbers():Promise<any>{
  try {
    await this.call.callNumber(String(this.PHONE), true);
    console.log("wait for call");
  }
  catch(e){ 
    console.error("error in calling", e);
  }

}
}


