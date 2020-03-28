import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Identifiers } from '@angular/compiler';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl: '../assets/album.json';

  getAlbum(id: number) {
    this._http.get(this._albumUrl).map((response) => response.json());
  }
}
