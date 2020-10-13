import { Component, OnInit } from '@angular/core';
import { RegionsDataService } from 'src/app/services/regions-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fsp-entrance-map',
  templateUrl: './entrance-map.component.html',
  styleUrls: ['./entrance-map.component.scss']
})
export class EntranceMapComponent implements OnInit {

  public regions: any; // To-do: Add strong typing

  public googleMapsOptions = {
    center: {lat: 0, lng: -0},
    zoom: 2
  };

  public vertices: google.maps.LatLngLiteral[];

  constructor(private regionsData: RegionsDataService,
              private router: Router) {}

  public progressRoute(regionId: number): void {
    this.router.navigate(['youth/learn'], { queryParams:  { regionId: regionId }});
  }
    // Test data
  ngOnInit(): void {
    this.regionsData.getAllRegions().subscribe(data => {
      console.log(data);
      this.regions = data;
    });
  }

}
