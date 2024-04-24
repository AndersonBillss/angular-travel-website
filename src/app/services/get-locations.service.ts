import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { countries } from '../data/countries'

@Injectable({
  providedIn: 'root'
})
export class GetLocationsService {

  private apiURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'def8ae7c4amsh4f7fa2a71ee8592p1cc7b6jsn420499853f2a',
    'X-RapidAPI-Host':  'wft-geo-db.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getLocations(): Observable<any> {
    return this.http.get(this.apiURL, { headers: this.headers });
  }
  getCountry(index: number){
    const country = countries[index]
    return country
  }

  getFeaturedCountry(){
    const currentDate = new Date();
    const millisecondsSinceEpoch = currentDate.getTime();
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const daysSinceEpoch = Math.floor(millisecondsSinceEpoch / millisecondsInDay);

    const seed = daysSinceEpoch
    const x = Math.sin(seed) * 100000;
    const random = x - Math.floor(x);
    const countryIndex = Math.floor(random*195)

    const country = this.getCountry(countryIndex)
    return(country)
  }
}


/* options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'def8ae7c4amsh4f7fa2a71ee8592p1cc7b6jsn420499853f2a',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
}; */
