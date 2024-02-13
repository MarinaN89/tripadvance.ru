import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, ContentChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { SliderAnimationType } from '../ui/slider/slider.enum';
import { SliderComponent } from '../ui/slider/slider.component';
import { SlideComponent } from '../ui/slide/slide.component';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-main-chapters',
  templateUrl: './main-chapters.component.html',
  styleUrls: ['./main-chapters.component.scss']
})
export class MainChaptersComponent {

  @ViewChild(SliderComponent) slider!: SliderComponent;
  @ContentChildren(SlideComponent, { read: ElementRef }) elSliders!: any;
  
  public animationType: SliderAnimationType = SliderAnimationType.EaseInOutSine;
  public animationDuration: number = 1000;

  constructor(public site: SiteService){}

  next(){
    this.slider.next();
  }

  prev(){
    this.slider.prev();
  }
}
