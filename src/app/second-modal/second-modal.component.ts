import { Component, OnInit } from '@angular/core';
import { MyServiceDataService } from '../my-service-data.service';

@Component({
  selector: 'app-second-modal',
  templateUrl: './second-modal.component.html',
  styleUrls: ['./second-modal.component.scss'],
})
export class SecondModalComponent implements OnInit {

  goBack() {
    this.service.isSecondModalOpened = !this.service.isSecondModalOpened
    this.service.btnActive = true
  }

  constructor(public service: MyServiceDataService) {

  }

  ngOnInit(): void {}
}
