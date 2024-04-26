import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ImageApiInterface } from '../image-api-interface';

@Injectable({
  providedIn: 'root'
})
export class GetImgService {

  constructor(private http: HttpClient) { }

  getImg(country: string): Observable<ImageApiInterface>{
    const encodedCountry = encodeURIComponent(country);
    const apiResult = this.http.get<ImageApiInterface>(`https://api.unsplash.com/search/photos/?query=${encodedCountry}&client_id=${apiKey.access_key}`)
    return(apiResult)
  }

}
