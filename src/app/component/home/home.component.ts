import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {RouteService} from '../services/route.service';
import * as Aos from 'aos';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild('animatedHeader') animatedHeader: ElementRef;
  @ViewChild('animatedSubHeader') animatedSubHeader: ElementRef;
  isLoading = false;
  hideInitial1: boolean = false;
  hideInitial2: boolean = false;
  hideInitial3: boolean = false;
  hideInitial4: boolean = false;
  hideInitial5: boolean = false;
  hideInitial6: boolean = false;
  listItem: any = [];
  list_order: number = 1;
  isShow: boolean;
  topPosToStartShowing = 100;
  
  @HostListener('window:scroll')
  checkScroll() {
        // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
    gotoTop() {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  
  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    Aos.init();
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.routeService.navigate('/');
    }, 500);
    setTimeout(() => {
      this.animatedHeader.nativeElement.click();
      this.animatedSubHeader.nativeElement.click();
    }, 1600);
    for (let i=0; i<10; i++) {
      this.task(i);
   }   
  }

  ngAfterViewInit(): void {
  }

  addItem() {
    var listitem = "ListItem " + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
  }

  task(i: number) {
    setTimeout(() => {
      this.addItem();
    }, 2000 * i);

    
    setTimeout(() => {
      this.removeItem();
    }, 4000 * i);
  }

  showWhole1() {
    this.hideInitial1 = true;
  }

  hideWhole1() {
    this.hideInitial1 = false;
  }

  showWhole2() {
    this.hideInitial2 = true;
  }

  hideWhole2() {
    this.hideInitial2 = false;
  }

  showWhole3() {
    this.hideInitial3 = true;
  }

  hideWhole3() {
    this.hideInitial3 = false;
  }
  
  showWhole4() {
    this.hideInitial4 = true;
  }

  hideWhole4() {
    this.hideInitial4 = false;
  }

  showWhole5() {
    this.hideInitial5 = true;
  }

  hideWhole5() {
    this.hideInitial5 = false;
  }

  showWhole6() {
    this.hideInitial6 = true;
  }

  hideWhole6() {
    this.hideInitial6 = false;
  }
}
