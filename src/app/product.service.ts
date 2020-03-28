import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Response } from '@angular/http'
import { Identifiers } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl: '../assets/album.json';

  getAlbum(id: number) {
    this._http.get(this._albumUrl);
  }
}
