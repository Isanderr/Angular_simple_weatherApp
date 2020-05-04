import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class ApixuService {

  constructor ( private http: HttpClient ) { }
  getWeather( location ) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=9da02712a30a22374f85d3fd46b51d3c&query='+location
    );
  }
}
