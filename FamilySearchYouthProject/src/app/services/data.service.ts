import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbPath = '/regions';

  customersRef: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);

  }

  getAllRegions(): AngularFireList<any> {
    return this.customersRef;
  }
}
