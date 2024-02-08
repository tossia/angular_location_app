import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
