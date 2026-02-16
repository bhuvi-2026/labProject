import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cities = ['Bengaluru'];
  selectedLocation = 'Bengaluru';
  showLocationDropdown = false;

  constructor(private elementRef: ElementRef) {}

  openLocationDropdown() {
    this.showLocationDropdown = true;
  }

  onLocationInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.selectedLocation = val;
    this.showLocationDropdown = true; // keep suggestions visible while typing
  }

  selectCity(city: string) {
    this.selectedLocation = city;
    this.showLocationDropdown = false;
  }
  closeLocationDropdown() {
    this.showLocationDropdown = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showLocationDropdown = false;
    }
  }
}