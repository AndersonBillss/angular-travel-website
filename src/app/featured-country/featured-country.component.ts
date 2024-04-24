import { Component, OnInit } from '@angular/core';
import { GetLocationsService } from '../services/get-locations.service';

@Component({
  selector: 'app-featured-country',
  templateUrl: './featured-country.component.html',
  styleUrl: './featured-country.component.css'
})
export class FeaturedCountryComponent implements OnInit {

  constructor(private getLocationsService: GetLocationsService){

  }

  featuredCountry: string = ''

  ngOnInit(): void {
    this.featuredCountry = this.getLocationsService.getFeaturedCountry()
  }
}
