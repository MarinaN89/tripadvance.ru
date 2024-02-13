import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { trigger, state, transition, style, animate, AnimationOptions, stagger, query, useAnimation, AnimationBuilder } from '@angular/animations';



@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('collapse', [
      state('visible', style({
        height: '*'
      })),
      state('hidden', style({
        height: '0px'
      })),
      transition('visible <=> hidden', animate('300ms ease-in-out'))
    ])
  ]
})
export class CollapseComponent {
  @Input() expanded: boolean = true;
}

/*
    trigger('collapsed', [
      state('show', style({height: '{{ this.dinamicHeight }}'})),
      state('hidden', style({height: '0px'})),
      transition('show => hidden', [animate('0.15s')]),
      transition('hidden => show', [animate('0.15s')]),
    ]),
*/

/*

export class CollapseComponent implements OnInit {
 
  @ViewChild('content') content!: ElementRef;
  @ViewChild('wrapper') wrapper!: ElementRef;
  isExpanded: boolean = false;
  heightContent: number = 0;
  @Input() height: number = 0;

  @Input() 
  set expanded(value:any){
   
    this.isExpanded = value;

    try{
      if(this.heightContent == 0){
        this.heightContent = this.content.nativeElement.offsetHeight;
        console.log("expanded", this.heightContent);

        if(this.heightContent > 0){
          this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        }

        this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
       
      }

      if(this.isExpanded == false)
        this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
      else
        this.renderer.setStyle(this.content.nativeElement, 'height', `${this.heightContent+20}px`);
    }
    catch(e){
      //console.log(e);
    }
  }

  hightContent:number = 0;


  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) { 
    try{
      if(this.heightContent == 0){
        this.heightContent = this.content.nativeElement.offsetHeight;
        console.log("constructor", this.heightContent);
        if(this.heightContent > 0){
          this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        }
  
        this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        
      }
    }catch(e){
      
    }
  }

  ngOnInit(): void {
    try{
      if(this.heightContent == 0){
        this.heightContent = this.content.nativeElement.offsetHeight;
        console.log("ngOnInit", this.heightContent);
        if(this.heightContent > 0){
          this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        }
  
        this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        
      }
    }catch(e){
      
    }
  }

  ngAfterContentInit():void{
    try{
      if(this.heightContent == 0){
        this.heightContent = this.content.nativeElement.offsetHeight;
        console.log("ngAfterContentInit", this.heightContent);
        if(this.heightContent > 0){
          this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        }
  
        this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        
       }
    }catch(e){
      
    }
  }
 
  ngAfterViewInit(): void{
    try{
      if(this.heightContent == 0){
        this.heightContent = this.content.nativeElement.offsetHeight;
        console.log("ngAfterViewInit", this.heightContent);
        if(this.heightContent > 0){
          this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        }
  
        this.renderer.setStyle(this.content.nativeElement, 'height', `0px`);
        
      }
    }catch(e){

    }


    /*
    if(this.height == 0 || this.height == undefined){
      var height = this.content.nativeElement.offsetHeight;
      this.hightContent = height;
    }else{
      this.hightContent = this.height;
    }

    console.log(this.content.nativeElement);

    var height = this.content.nativeElement.offsetHeight;
    this.hightContent = height;

    console.log(height);
  
    //this.renderer.setStyle(this.wrapper.nativeElement, 'height', `0px`);
    this.cdr.detectChanges();
  }

  getHight(){
    if(this.expanded){
      try{
        //this.renderer.setStyle(this.wrapper.nativeElement, 'height', `100%`);
      }catch(e){

      }
    }
    return (this.expanded !== true) ? 0 : this.hightContent;
  }
}
*/