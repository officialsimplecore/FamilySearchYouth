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

  public activeRegion: number;

  public googleMapsOptions = {
    center: {lat: -34.44515, lng: 172.60283},
    zoom: 4
  };

  public vertices: google.maps.LatLngLiteral[];

  constructor(private regionsData: RegionsDataService,
              private router: Router) {}

  public progressRoute(regionId: number): void {
    this.router.navigate(['youth/learn'], { queryParams:  { regionId: regionId }});
  }

  public getStrokeColor(regionId): string {
    if (regionId == this.activeRegion) {
      return '#FFF';
    } else {
      return '#000';
    }
  }

  public hoverEffect(condition: boolean, regionId): void {
    if (condition) {
      this.activeRegion = regionId;
    } else {
      this.activeRegion = -1;
    }
  }

    // Test data
  ngOnInit(): void {
    this.regionsData.getAllRegions().subscribe(data => {
      console.log(data);
      this.regions = data;
    });
  }

}
