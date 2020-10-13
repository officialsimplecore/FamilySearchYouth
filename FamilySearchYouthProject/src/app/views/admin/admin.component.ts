import { Component, OnInit } from '@angular/core';
import {RegionsDataService} from "../../services/regions-data.service";

@Component({
  selector: 'fsp-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public regions: any;

  constructor(private regionsData: RegionsDataService) { }

  addRegion(region): void {
    console.log(region);
    this.regionsData.addRegion(region);
  }

  ngOnInit(): void {
    this.regionsData.listAllRegions().subscribe(data => {
      this.regions = data;
    })
  }
}
