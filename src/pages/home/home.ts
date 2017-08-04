import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  isAdministrador: boolean = true;
  isAdministrativo: boolean = true;
  isProfesor: boolean = true;
  isAlumno: boolean = true;

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService,
    public alertCtrl: AlertController
    ) {

  }

  changeLenguage(){
    let alert = this.alertCtrl.create();
    alert.setTitle(this.translate.instant('SELECCIONAR_LENGUAJE'));

    alert.addInput({
      type: 'radio',
      label: this.translate.instant('ESPAÑOL'),
      value: 'es',
      checked: this.translate.currentLang=="es"
    });

    alert.addInput({
      type: 'radio',
      label: this.translate.instant('INGLES'),
      value: 'en',
      checked: this.translate.currentLang=="en"
    });

    alert.addInput({
      type: 'radio',
      label: this.translate.instant('PORTUGUES'),
      value: 'pr',
      checked: this.translate.currentLang=="pr"
    });

    alert.addButton(this.translate.instant('CANCELAR'));
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
        //this.translate.setDefaultLang(data);
        console.info(this.translate.getLangs());
        this.translate.use(data).subscribe(
          res=>console.log(res,this.translate.currentLang)
        );
      }
    });
    alert.present();
  }
}
