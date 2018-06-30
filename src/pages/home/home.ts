import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private media: Media) {

  }
  playAudio() {
    let mediaPath = '/android_asset/www/assets/audio/Animals R Inno~.mp3'
    let sound = this.media.create(mediaPath)
    // console.log(sound.name)
    sound.play()
}
}
