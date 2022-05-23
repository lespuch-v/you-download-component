import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { MyServiceDataService } from './my-service-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YouDownload';

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    const dom = event?.target as HTMLBodyElement;

    if (dom.classList.contains('btn-open')) {
      console.log('Button clicked');
    } else if (dom.classList.contains('main-section-container')) {
      console.log(dom);
      this.setAllFalse();
    }
  }

  openFirstModal() {
    this.service.isFirstModalOpened = !this.service.isFirstModalOpened;
    this.service.btnActive = false
  }

  setAllFalse() {
    this.service.isFirstModalOpened = false;
    if(this.service.btnActive === false){
      this.service.btnActive = true
    }
  }

  constructor(public service: MyServiceDataService) {}
}
