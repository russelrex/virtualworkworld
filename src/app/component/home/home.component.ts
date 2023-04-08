import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {RouteService} from '../services/route.service';

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
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.routeService.navigate('/');
    }, 500);

    setTimeout(() => {
      this.animatedHeader.nativeElement.click();
      this.animatedSubHeader.nativeElement.click();
    }, 1600);
  }

  ngAfterViewInit(): void {
  }
}
