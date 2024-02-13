import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, ContentChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { SliderAnimationType } from '../ui/slider/slider.enum';
import { SliderComponent } from '../ui/slider/slider.component';
import { SlideComponent } from '../ui/slide/slide.component';

@Component({
  selector: 'app-main-partners',
  templateUrl: './main-partners.component.html',
  styleUrls: ['./main-partners.component.scss']
})
export class MainPartnersComponent {
  @ViewChild(SliderComponent) slider!: SliderComponent;
  @ContentChildren(SlideComponent, { read: ElementRef }) elSliders!: any;
  
  public animationType: SliderAnimationType = SliderAnimationType.EaseInOutSine;
  public animationDuration: number = 1000;
  
  next(){
    this.slider.next();
  }

  prev(){
    this.slider.prev();
  }
}
