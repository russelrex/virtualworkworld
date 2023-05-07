import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  hideInitial1: boolean = false;
  hideInitial2: boolean = false;
  hideInitial3: boolean = false;
  hideInitial4: boolean = false;
  hideInitial5: boolean = false;
  hideInitial6: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
