import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, OnChanges, AfterContentInit, AfterContentChecked, ViewChildren, ContentChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { CollapseComponent } from '../collapse/collapse.component';
import { SliderAnimationType } from './slider.enum';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})



export class SliderComponent  implements OnChanges {

  public sliders = [];

  public currentSlide = 0;
  public slideWidth = 0;
  public isAnimation:boolean = false;
  public autoPlayEnabled: boolean = false;
  public autoPlayHandle: any = undefined;

  swipeCoord:any;
  swipeTime:any;

  @Input() public autoPlayDelay: number = 1000;

  private animationBreak: boolean = false;

  @Input() public type: SliderAnimationType = SliderAnimationType.LinearTween;
  @Input() public duration: number = 5000;
  @Input() public location: any = "left";
  @Input() public sizeType: any = "all";
  @Input() public buttonsMobile: any = false;

  pCountView: number = 1;
  pOffset: number = 0;
  elSlidersLast: any = [];
  pMaxElementWidth: any = 0;
  pInitialize: any = false;
  clientWidth: any = 0;

  @Input()
  set countView(value:any){
    this.pCountView = value;
    this.ngAfterContentInit();
  }

  @ViewChild('slider') elSlider!: ElementRef;
  @ContentChildren(SlideComponent, { read: ElementRef }) elSliders!: any;


  @Output('onChange') event = new EventEmitter<any>();
  @Output('onAnimate') eventAnimate = new EventEmitter<any>();

  constructor(@Inject(PLATFORM_ID) private platformId: object, private renderer: Renderer2, private cdref: ChangeDetectorRef){
  }
  isHidden(elem:any) {
    return !elem.offsetWidth && !elem.offsetHeight;
  }




  public refresh(){

    let left = 0;

    if(this.location == "left"){
      this.slideWidth = this.elSlider.nativeElement.offsetWidth / this.pCountView;

      for(var i = 0; i < this.elSliders.length; i++){
        var index = this.currentSlide + i;
        if(index >= this.elSliders.length)
          index -= this.elSliders.length;  

          //this.slideWidth = this.elSliders.get(index).nativeElement.offsetWidth;
  
  
        var element = this.elSliders.get(index).nativeElement;


        if(this.sizeType == "default"){
          this.slideWidth = element.offsetWidth;
        }
          
        this.renderer.setStyle(element, 'width', `${this.slideWidth}px`);
        this.renderer.setStyle(element, 'transform', `translateX(${left}px)`);
        this.renderer.setStyle(element, 'grid-area', `1 / 1 / 2 / 2`);
        //
       // this.renderer.setStyle(element, 'left', `${left}px`);
       // this.renderer.setStyle(element, 'position', 'absolute');
        left = left + this.slideWidth;
      }
    }else if(this.location == "center"){

      this.slideWidth = this.elSlider.nativeElement.offsetWidth * 0.7;
      this.pOffset = this.slideWidth / 2;
      
      var offset = this.elSlider.nativeElement.offsetWidth / 2;
      this.pOffset = offset - (this.slideWidth / 2);
      left = this.pOffset;

      for(var i = 0; i < this.elSliders.length; i++){
        var index = this.currentSlide + i;
        
        if(index >= this.elSliders.length)
          index -= this.elSliders.length;  
          
        if(index == this.elSliders.length - 1){
          left = -(this.slideWidth - this.pOffset);
        }
  
        var element = this.elSliders.get(index).nativeElement;

          
        this.renderer.setStyle(element, 'width', `${this.slideWidth}px`);
        //this.renderer.setStyle(element, 'left', `${left}px`);
        this.renderer.setStyle(element, 'transform', `translateX(${left}px)`);
        this.renderer.setStyle(element, 'grid-area', `1 / 1 / 2 / 2`);
       // this.renderer.setStyle(element, 'position', 'absolute');
        left = left + this.slideWidth;
      }
    }

    /*
    if(this.pInitialize == false){
      this.renderer.setStyle(this.elSlider.nativeElement, 'height', `${maxHeight}px`);
      for(var i = 0; i < this.elSliders.length; i++){
        var element = this.elSliders.get(i).nativeElement;
        this.renderer.setStyle(element, 'height', `${maxHeight}px`);
      }
      this.pInitialize = true;
    }
    */

    
  }

  swipe(e:TouchEvent, when:string){
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();
  
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;
  
      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'next' : 'previous';
          if(direction[0] < 0)
            this.next();
          else{
            this.prev();
          }
      }
    }
  }

  ngAfterViewInit(): void{
    let maxHeight = 0;
    if(this.location == "left"){

      this.slideWidth = this.elSlider.nativeElement.offsetWidth / this.pCountView;

      let left = 0;
      for(var i = 0; i < this.elSliders.length; i++){
        var element = this.elSliders.get(i).nativeElement;
        if(maxHeight < element.offsetHeight)
          maxHeight = element.offsetHeight;

          if(this.sizeType == "default"){
            this.slideWidth = element.offsetWidth;
          }
          
        this.renderer.setStyle(element, 'width', `${this.slideWidth}px`);
        this.renderer.setStyle(element, 'transform', `translateX(${left}px)`);
        this.renderer.setStyle(element, 'grid-area', `1 / 1 / 2 / 2`);
        //grid-area: 1 / 1 / 2 / 2;
       // this.renderer.setStyle(element, 'left', `${left}px`);
       // this.renderer.setStyle(element, 'position', 'absolute');

        left = left + this.slideWidth;
      }

    }else if(this.location == "center"){

      this.slideWidth = this.elSlider.nativeElement.offsetWidth * 0.7;
      this.pOffset = this.slideWidth / 2;

      var offset = this.elSlider.nativeElement.offsetWidth / 2;
      this.pOffset = offset - (this.slideWidth / 2);

      let left = this.pOffset;
      for(var i = 0; i < this.elSliders.length; i++){
        var element = this.elSliders.get(i).nativeElement;
        if(maxHeight < element.offsetHeight)
          maxHeight = element.offsetHeight;

        if(i == this.elSliders.length - 1){
          left = -(this.slideWidth - this.pOffset);
        }
          
        this.renderer.setStyle(element, 'width', `${this.slideWidth}px`);
       //this.renderer.setStyle(element, 'left', `${left}px`);
        this.renderer.setStyle(element, 'transform', `translateX(${left}px)`);
        this.renderer.setStyle(element, 'grid-area', `1 / 1 / 2 / 2`);
       // this.renderer.setStyle(element, 'position', 'absolute');
        left = left + this.slideWidth;
      }


    }



   // this.renderer.setStyle(this.elSlider.nativeElement, 'height', `${maxHeight+10}px`);
    this.cdref.detectChanges();

    this.elSlidersLast = this.elSliders.toArray();

    //this.init();
    this.refresh();
  }

  ngOnChanges(changes: any) {
    
  }

  ngAfterContentChecked(){

    if(this.elSlider != undefined && this.elSliders.length > 0 && this.elSlidersLast.length > 0){
      const firstEl: ElementRef = this.elSliders.get(0);
      if(firstEl != this.elSlidersLast[0]){
        this.elSlidersLast = this.elSliders.toArray();
        this.refresh();
      }
    }
  }

  ngAfterContentInit(): void{

    //var handle = setInterval(function() {   
    //  console.log("slider timer", component.getContentHeight());
    //}, 10);
/*
    if(this.elSliders.length <= this.pCountView){
      const elSlidersArr = this.elSliders.toArray();
      const firstEl: ElementRef = this.elSliders.get(0);
      const newEl: ElementRef = new ElementRef(firstEl.nativeElement.cloneNode(true));
      elSlidersArr.unshift(newEl);

      this.elSliders.reset(elSlidersArr);
      this.cdref.detectChanges();
    }
    */

    
  }

  getContentHeight(){
    let maxHeight = 0;
    if(this.elSliders == undefined)
      return 0;

    for(var i = 0; i < this.elSliders.length; i++){
      var element = this.elSliders.get(i).nativeElement;

      let children = element.childNodes;

      let heightSum = 0;
      for(let child of children){
          heightSum += child.offsetHeight;
      }
      if(maxHeight < heightSum)
        maxHeight = heightSum;
    }
    return maxHeight;
  }



  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.clientWidth = document.body.clientWidth;
    this.refresh();
  }

  init(){
    this.animationBreak = true;
    this.slideWidth = this.elSlider.nativeElement.offsetWidth / this.pCountView;
    let left = 0;
    for(var i = 0; i < this.elSliders.length; i++){
      var element = this.elSliders.get(i).nativeElement;
      if(this.sizeType == "default"){
        if(this.pMaxElementWidth < element.offsetWidth)
          this.pMaxElementWidth = element.offsetWidth;

        this.slideWidth = element.offsetWidth;
      }
      this.renderer.setStyle(element, 'width', `${this.slideWidth}px`);
      left = left + this.slideWidth;
    }
  }

  setSlide(value:number){

    if(this.isAnimation == true){
      return;
    }

    var items = [];
    if(value > this.currentSlide){
      var element = this.elSliders.get(value).nativeElement;
      this.renderer.setStyle(element, 'transform', `translateX(${this.slideWidth}px)`);

      items.push({
        index:this.currentSlide,
        start:0,
        end:-this.slideWidth,
      });

      items.push({
        index:value,
        start:this.slideWidth,
        end:0,
      });

      this.currentSlide = value;
    }
    else if(value < this.currentSlide){
      var element = this.elSliders.get(value).nativeElement;
      this.renderer.setStyle(element, 'transform', `translateX(${-this.slideWidth}px)`);

      items.push({
        index:this.currentSlide,
        start:0,
        end: this.slideWidth,
      });

      items.push({
        index:value,
        start:-this.slideWidth,
        end:0,
      });

      this.currentSlide = value;
    }
    else{
      return;
    }

    this.animate(items);

  }

  animate(items:any){
    this.isAnimation = true;
    const component = this;
    var fn = this[this.type];
    var startTime = Date.now();

    for(var i = 0; i < items.length; i++){
      const slide = this.elSliders.get(items[i].index).nativeElement;
      this.renderer.setStyle(slide, 'transform', `translateX(${items[i].start}px)`);
    }

    var handle = setInterval(function() {   

      if(component.animationBreak){
        component.isAnimation = false;
        clearInterval(handle);
        component.animationBreak = false;
        component.ngAfterContentInit();
        return;
      }

      var stop = false;
      var time = Date.now() - startTime;

      for(var i = 0; i < items.length; i++){
        const slide = component.elSliders.get(items[i].index).nativeElement;
        var x = fn(time, items[i].start, items[i].end - items[i].start, component.duration);

        if(time >= component.duration){
          x = items[i].end;
          time = component.duration;
          stop = true;
        }
        if(i == 0){
          let percent = (100 / component.duration) * time;
          component.eventAnimate.emit({
            percent: percent
          })
        }

        component.renderer.setStyle(slide, 'transform', `translateX(${x}px)`);
      }

      if(stop){
        component.isAnimation = false;
        clearInterval(handle);
        var direction = -1;
        if(items[0].start > items[0].end){
          direction = 1;
        }

        component.event.emit({
          current: component.currentSlide,
          direction:direction,
        });
      }
    }, 1);
  }

  hideSliders(){
    for(var i = 0; i < this.elSliders.length; i++){
      var element = this.elSliders.get(i).nativeElement;
      //this.renderer.setStyle(element, 'opacity', "0");
    }
  }

  showSlide(index:number){
    var element = this.elSliders.get(index).nativeElement;
    //this.renderer.setStyle(element, 'opacity', "1");
  }

  public next(){
    if(this.isAnimation)
      return;

    if(this.pCountView >= this.elSliders.length)
      return;

    var items = [];
    if(this.location == "left"){
      for(var i = 0; i < this.pCountView + 1; i++){
        let start = i * this.slideWidth;
        let end = start - this.slideWidth;

        let index = this.currentSlide + i;
        if(index >= this.elSliders.length)
          index = index - this.elSliders.length;

        if(this.sizeType == "default"){
          var element = this.elSliders.get(index).nativeElement;
          start = element.offsetLeft;
          end = start - this.pMaxElementWidth;
        }
  
        items.push({
          index:index,
          start:start,
          end:end
        });
      }
    }else if(this.location == "center"){
      for(var i = -1; i < this.pCountView; i++){
        const start = (i * this.slideWidth) + this.pOffset;
        const end = start - this.slideWidth;
        
        let index = this.currentSlide + i;
        if(index >= this.elSliders.length)
          index = index - this.elSliders.length;
        if(index < 0)
          index = index + this.elSliders.length;
  
        items.push({
          index:index,
          start:start,
          end:end
        });
      }
    }

    this.animate(items);
    this.currentSlide = this.currentSlide + 1;
    if(this.currentSlide >= this.elSliders.length)
      this.currentSlide = 0;
  }

  public prev(){
    if(this.isAnimation)
      return;

    if(this.pCountView >= this.elSliders.length)
      return;

    var items = [];

    if(this.location == "left"){
      for(var i = -1; i < this.pCountView; i++){
        const start = i * this.slideWidth;
        const end = start + this.slideWidth;
  
        let index = this.currentSlide + i;
        if(index >= this.elSliders.length)
          index = index - this.elSliders.length;
        else if(index < 0)
          index = index + this.elSliders.length;
  
        items.push({
          index:index,
          start:start,
          end:end
        });
      }
    }else if(this.location == "center"){
      for(var i = -2; i < this.pCountView; i++){
        const start = (i * this.slideWidth) + this.pOffset;
        const end = start + this.slideWidth;
  
        let index = this.currentSlide + i;
        if(index >= this.elSliders.length)
          index = index - this.elSliders.length;
        else if(index < 0)
          index = index + this.elSliders.length;
  
        items.push({
          index:index,
          start:start,
          end:end
        });
      }
    }


    this.animate(items);
    this.currentSlide = this.currentSlide - 1;
    if(this.currentSlide < 0)
      this.currentSlide = this.elSliders.length - 1;
  }


  public autoPlay(enabled:boolean){

    if (!isPlatformBrowser(this.platformId)) {
        return;
    }

    if(enabled == false){
      if(this.autoPlayHandle != undefined){
        clearInterval(this.autoPlayHandle);
        this.autoPlayHandle = undefined;
        return;
      }
    }


    const component = this;
    var anim = false;

    this.autoPlayHandle = setInterval(function() {   
      if(component.isAnimation)
        return;

      if(anim)
        return;

      anim = true;
      var startTime = Date.now();
      var handleDuration = setInterval(function() { 
        var time = Date.now() - startTime;
        
        if(time >= component.autoPlayDelay){
          component.next();
          anim = false;
          time = component.autoPlayDelay;
          clearInterval(handleDuration);
        }

        let percent = (100 / component.autoPlayDelay) * time;
        component.eventAnimate.emit({
          durationPercent: percent
        });
      
      }, 1);

      
      //setTimeout(function(){
      //  component.next();
      //  anim = false;
      //}, component.autoPlayDelay);
      
    }, 1);
  }




  getSlideRight(){
    if(this.currentSlide + 1 >= this.elSliders.length)
      return this.elSliders.get(0).nativeElement;
    return this.elSliders.get(this.currentSlide + 1).nativeElement;
  }
  getSlideLeft(){
    if(this.currentSlide - 1 < 0)
      return this.elSliders.get(this.elSliders.length - 1).nativeElement;
    return this.elSliders.get(this.currentSlide - 1).nativeElement;
  }
  getSlideCurrent(){
    return this.elSliders.get(this.currentSlide).nativeElement;
  }




  //----------------------------------------------------------

  linearTween(t:number, b:number, c:number, d:number){
    return c*t/d + b;
  }

  easeInQuad(t:number, b:number, c:number, d:number){
    t /= d;
    return c*t*t + b;
  };

  easeOutQuad(t:number, b:number, c:number, d:number){
    t /= d;
    return -c * t*(t-2) + b;
  };

  easeInOutQuad(t:number, b:number, c:number, d:number){
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  easeInCubic(t:number, b:number, c:number, d:number){
    t /= d;
    return c*t*t*t + b;
  };

  easeOutCubic(t:number, b:number, c:number, d:number){
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
  };

  easeInOutCubic(t:number, b:number, c:number, d:number){
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  };
  easeInQuart(t:number, b:number, c:number, d:number){
    t /= d;
    return c*t*t*t*t + b;
  };
  easeOutQuart(t:number, b:number, c:number, d:number){
    t /= d;
    t--;
    return -c * (t*t*t*t - 1) + b;
  };
  easeInOutQuart(t:number, b:number, c:number, d:number){
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
  };
  easeInQuint(t:number, b:number, c:number, d:number){
    t /= d;
    return c*t*t*t*t*t + b;
  };
  easeOutQuint(t:number, b:number, c:number, d:number){
    t /= d;
    t--;
    return c*(t*t*t*t*t + 1) + b;
  };
  easeInOutQuint(t:number, b:number, c:number, d:number){
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
  };
  easeInSine(t:number, b:number, c:number, d:number){
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  };
  easeOutSine(t:number, b:number, c:number, d:number){
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  };
  easeInOutSine(t:number, b:number, c:number, d:number){
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  };
  easeInExpo(t:number, b:number, c:number, d:number){
    return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
  };
  easeOutExpo(t:number, b:number, c:number, d:number){
    return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
  };
  easeInOutExpo(t:number, b:number, c:number, d:number){
    t /= d/2;
    if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
    t--;
    return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
  };
  easeInCirc(t:number, b:number, c:number, d:number){
    t /= d;
    return -c * (Math.sqrt(1 - t*t) - 1) + b;
  };
  easeOutCirc(t:number, b:number, c:number, d:number){
    t /= d;
    t--;
    return c * Math.sqrt(1 - t*t) + b;
  };
  easeInOutCirc(t:number, b:number, c:number, d:number){
    t /= d/2;
    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    t -= 2;
    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
  };
}
