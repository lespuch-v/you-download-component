import { Component, OnInit } from '@angular/core';
import { MyServiceDataService } from '../my-service-data.service';

@Component({
  selector: 'app-first-modal',
  templateUrl: './first-modal.component.html',
  styleUrls: ['./first-modal.component.scss'],
})
export class FirstModalComponent implements OnInit {
  firstContinue() {
    // vypnout prvni modal
    this.service.isFirstModalOpened = false;
    this.service.btnActive = false
    // zapnout druhy modal
    this.service.isSecondModalOpened = !this.service.isSecondModalOpened;
    // vypnout button
  }

  constructor(public service: MyServiceDataService) {}

  ngOnInit(): void {}
}
