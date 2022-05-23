import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceDataService {
  btnActive = true
  isFirstModalOpened = false;
  isSecondModalOpened = false;

  cogIcon = "assets/icons/cog.svg"

  backHandler(){
    this.isSecondModalOpened = !this.isSecondModalOpened
  
  }

  constructor() { }
}
