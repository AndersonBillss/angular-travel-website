import { Component, OnInit } from '@angular/core';
import { GetLocationsService } from '../services/get-locations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(
    private getLocationService: GetLocationsService
  ){ }

  

  ngOnInit(): void {
  }

}
