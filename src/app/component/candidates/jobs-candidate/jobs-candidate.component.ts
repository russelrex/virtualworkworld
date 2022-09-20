import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jobs-candidate',
  templateUrl: './jobs-candidate.component.html',
  styleUrls: ['./jobs-candidate.component.scss']
})
export class JobsCandidateComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back();
  }
}
