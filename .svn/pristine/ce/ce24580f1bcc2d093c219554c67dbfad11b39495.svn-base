import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, ContentChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { SliderAnimationType } from '../ui/slider/slider.enum';
import { SliderComponent } from '../ui/slider/slider.component';
import { SlideComponent } from '../ui/slide/slide.component';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-main-integrations',
  templateUrl: './main-integrations.component.html',
  styleUrls: ['./main-integrations.component.scss']
})
export class MainIntegrationsComponent {

  @ViewChild(SliderComponent) slider!: SliderComponent;
  @ContentChildren(SlideComponent, { read: ElementRef }) elSliders!: any;
  
  public animationType: SliderAnimationType = SliderAnimationType.EaseInOutSine;
  public animationDuration: number = 1000;
  
  clientWidth: number = 0;

  constructor(public site: SiteService){
    if(site.IsPlatformBrowser())
      this.clientWidth = document.body.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(this.site.IsPlatformBrowser())
      this.clientWidth = document.body.clientWidth;
  }

  next(){
    this.slider.next();
  }

  prev(){
    this.slider.prev();
  }

  getCountViewSlides(){
    if(this.clientWidth <= 850)
      return 1;
    if(this.clientWidth <= 1200)
      return 2;
    return 3;
  }
}
