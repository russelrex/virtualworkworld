import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {RouteService} from '../services/route.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild('animatedHeader') animatedHeader: ElementRef;
  @ViewChild('animatedSubHeader') animatedSubHeader: ElementRef;
  isLoading = false;
  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    // AOS.init();
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.routeService.navigate('/');
    }, 1000);

    setTimeout(() => {
      this.animatedHeader.nativeElement.click();
      this.animatedSubHeader.nativeElement.click();
    }, 1600);
  }

  ngAfterViewInit(): void {
  }
}
