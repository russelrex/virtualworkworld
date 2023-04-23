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
  hideInitial1: boolean = false;
  isExpanded1: boolean = false;
  hideInitial2: boolean = false;
  isExpanded2: boolean = false;
  hideInitial3: boolean = false;
  isExpanded3: boolean = false;
  hideInitial4: boolean = false;
  isExpanded4: boolean = false;
  hideInitial5: boolean = false;
  isExpanded5: boolean = false;
  hideInitial6: boolean = false;
  isExpanded6: boolean = false;
  
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

  
  showWhole1() {
    this.hideInitial1 = true;
    this.isExpanded1 = true;
  }

  hideWhole1() {
    this.hideInitial1 = false;
    this.isExpanded1 = false;
  }

  showWhole2() {
    this.hideInitial2 = true;
    this.isExpanded2 = true;
  }

  hideWhole2() {
    this.hideInitial2 = false;
    this.isExpanded2 = false;
  }

  showWhole3() {
    this.hideInitial3 = true;
    this.isExpanded3 = true;
  }

  hideWhole3() {
    this.hideInitial3 = false;
    this.isExpanded3 = false;
  }
  
  showWhole4() {
    this.hideInitial4 = true;
    this.isExpanded4 = true;
  }

  hideWhole4() {
    this.hideInitial4 = false;
    this.isExpanded4 = false;
  }

  showWhole5() {
    this.hideInitial5 = true;
    this.isExpanded5 = true;
  }

  hideWhole5() {
    this.hideInitial5 = false;
    this.isExpanded5 = false;
  }

  showWhole6() {
    this.hideInitial6 = true;
    this.isExpanded6 = true;
  }

  hideWhole6() {
    this.hideInitial6 = false;
    this.isExpanded6 = false;
  }
}
