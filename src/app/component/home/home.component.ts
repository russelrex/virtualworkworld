import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
      console.log('===', i);
      this.addItem();
    }, 2000 * i);

    
    setTimeout(() => {
      console.log('===', i);
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
