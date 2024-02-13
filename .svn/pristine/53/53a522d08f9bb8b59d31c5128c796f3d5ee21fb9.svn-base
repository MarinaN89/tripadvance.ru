import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, ContentChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { SliderAnimationType } from '../ui/slider/slider.enum';
import { SliderComponent } from '../ui/slider/slider.component';
import { SlideComponent } from '../ui/slide/slide.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { SiteService } from '../site.service';


@Component({
  selector: 'app-main-decisions',
  templateUrl: './main-decisions.component.html',
  styleUrls: ['./main-decisions.component.scss']
})
export class MainDecisionsComponent {

  @ViewChild(SliderComponent) slider!: SliderComponent;
  @ContentChildren(SlideComponent, { read: ElementRef }) elSliders!: any;
  public animationType: SliderAnimationType = SliderAnimationType.EaseInOutSine;

  clientWidth: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object, public site:SiteService){
    if (isPlatformBrowser(this.platformId)) {
      this.clientWidth = document.body.clientWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if (isPlatformBrowser(this.platformId)) {
      this.clientWidth = document.body.clientWidth;
    }
  }

  productNext(){
    this.slider.next();
  }

  productPrev(){
    this.slider.prev();
  }

  isMobile(){
    var mobile = (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i)||
            navigator.userAgent.match(/iPhone|iPad|iPod/i)||
            navigator.userAgent.match(/Opera Mini/i)||
            navigator.userAgent.match(/IEMobile/i));

    return mobile;
  }

  getCountProductView(){
    if(this.clientWidth <= 850)
      return 1;
    if(this.clientWidth <= 1200)
      return 2;
    return 3;
  }
}
