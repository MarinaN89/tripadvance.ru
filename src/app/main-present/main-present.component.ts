import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, QueryList, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { SliderAnimationType } from '../ui/slider/slider.enum';
import { SliderComponent } from '../ui/slider/slider.component';
import { SlideComponent } from '../ui/slide/slide.component';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-main-present',
  templateUrl: './main-present.component.html',
  styleUrls: ['./main-present.component.scss']
})
export class MainPresentComponent {

  @ViewChildren(SliderComponent) sliders!: QueryList<SliderComponent>;
  public animationType: SliderAnimationType = SliderAnimationType.EaseInOutSine;
  public animationDuration: number = 400;

  clientWidth: number = 0;
  

  constructor(public site: SiteService) {
    if(site.IsPlatformBrowser())
      this.clientWidth = document.body.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(this.site.IsPlatformBrowser())
      this.clientWidth = document.body.clientWidth;
  }

  getCountViewSlides(){
    if(this.clientWidth <= 850)
      return 1;
    if(this.clientWidth <= 1200)
      return 2;
      

      
    return 4;
  }

  onChangeSlide(event:any){

  }
}
