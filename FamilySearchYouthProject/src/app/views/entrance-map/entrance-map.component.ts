import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fsp-entrance-map',
  templateUrl: './entrance-map.component.html',
  styleUrls: ['./entrance-map.component.scss']
})
export class EntranceMapComponent implements OnInit {

  public googleMapsOptions = {
    center: {lat: 0, lng: -0},
    zoom: 2
  };

  public kmlUrl;
    // Test data
  ngOnInit(): void {
  }

}
