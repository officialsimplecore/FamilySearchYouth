import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsDataService {

  constructor(private http: HttpClient) { }

  public getAllRegions(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/regions`);
  }

  public listAllRegions(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/regions/list`);
  }

  public addRegion(region): void {
    this.http.post(`${environment.apiUrl}/regions`, region).subscribe();
  }

}
