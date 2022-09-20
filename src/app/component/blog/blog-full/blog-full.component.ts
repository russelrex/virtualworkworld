import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-full',
  templateUrl: './blog-full.component.html',
  styleUrls: ['./blog-full.component.scss']
})
export class BlogFullComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }
}
