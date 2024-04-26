import { Component, OnInit } from '@angular/core';
import { GetLocationsService } from '../services/get-locations.service';
import { GetImgService } from '../services/get-img.service';

@Component({
  selector: 'app-featured-country',
  templateUrl: './featured-country.component.html',
  styleUrl: './featured-country.component.css'
})
export class FeaturedCountryComponent implements OnInit {
  countryImgUrl: string = ''

  constructor(
    private getLocationsService: GetLocationsService,
    private getImgService: GetImgService
  ){

  }

  featuredCountry: string = ''

  ngOnInit(): void {
    this.featuredCountry = this.getLocationsService.getFeaturedCountry()
    this.getImgService.getImg(this.featuredCountry).subscribe((data) => {
      this.countryImgUrl = data.results[0].urls.regular
    })
  }
}
