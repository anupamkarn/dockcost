import { Component, ViewChild } from '@angular/core';
//import { IonicPage } from 'ionic-angular'
import { NavController } from 'ionic-angular';
import {ElementRef} from '@angular/core'

declare var google;
//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  start : any;
  end : any;
  constructor(public navCtrl: NavController) {

  }

  calculateAndDisplayRoute() {
    
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);
    
    directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
