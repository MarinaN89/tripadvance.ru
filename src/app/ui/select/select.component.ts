import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @ViewChild("select", { static: false }) select!: ElementRef;
  @ViewChild("popup", { static: false }) popup!: ElementRef;
  @ViewChild("content", { static: false }) content!: ElementRef;
  
  @Input() requred: boolean = false;
  @Output('onChange') event = new EventEmitter<any>();
  @Input() items:any;
  @Input() borderWidth:number = 1; 
  @Input()
  set showSelectionTitle(value:any){
    this.isShowSelectionTitle = (value === "false") ? false : true;
  }

  public isShowSelectionTitle:boolean = true;

  public item:any;
  @Input() public showHeader:boolean = true;
  public showPopap:boolean = false;
  public showImages:boolean = false;
  public showIcons:boolean = false;
  public top:any = 0;
  @Input() public left:any = 0;
  @Input() public width:any = "auto";

  constructor(private renderer: Renderer2) { 
    this.item = this.getEmptyItem();

    this.renderer.listen('window', 'click',(e:Event)=>{

      if(this.showPopap==false)
        return;

      if(this.select != undefined && this.content != undefined && this.popup != undefined){
        if(this.select.nativeElement.contains(e.target) == false && this.content.nativeElement.contains(e.target) == false && this.popup.nativeElement.contains(e.target) == false){         
          this.showPopap=false;
        }
      }
    });
  }

  public offClickHandler(event:any) {
    if (!this.select.nativeElement.contains(event.target)) {
        if(this.showPopap)
          this.showPopap = false;
    }
  }

  ngOnInit(): void {   
    this.item = this.findSelectionItem();
    this.showImages = this.isImage();
    this.showIcons = this.isIcons();
  }

  public onEvent(event:any){
    console.log(event);
  }

  public changePositionPopap(){

    const padding = 10;
    let popupHeight = (this.items.length * 26) + padding;
    if(popupHeight >= 240)
      popupHeight = 240;

    const selectBounds = this.select.nativeElement.getBoundingClientRect();
    const selectHeight = selectBounds.bottom - selectBounds.top;

    const contentBounds = this.content.nativeElement.getBoundingClientRect();
    const contentHeight = contentBounds.bottom - contentBounds.top;

    let top = 0;
    let offsetY = 0;
    if(selectHeight == 0){
      top = 2;
      offsetY = contentBounds.bottom;
    }else{
      top = selectHeight + 2;
      offsetY = selectBounds.bottom;
    }

    let bottom = top + popupHeight + offsetY;
    if(bottom >= window.innerHeight){
      if(selectHeight == 0){
        top = -(contentHeight + 2);
      }else{
        top = - (selectHeight/2);
      }
      top -= popupHeight;
    }
    this.top = top;
  }

  public onClick(event:any){

    this.changePositionPopap();
    //this.top = (this.showHeader) ? 33:4;

      
/*
    var bottom = selectBounds.top + height;

    if(bottom >= window.innerHeight){

      
      console.log("bounds", bounds);
      console.log("bottom", bottom);
      console.log("height", height);
      

      //this.top -= this.top + height;
    }
*/
    /*
    Получение координат при скроллинге
    let offsetLeft = 0;
    let offsetTop = 0;
    let el = event.srcElement;
    while(el){
        offsetLeft += el.offsetLeft;
        offsetTop += el.offsetTop;
        el = el.parentElement;
    }
    console.log({ offsetTop:offsetTop , offsetLeft:offsetLeft });
    */

    this.showPopap = !this.showPopap;
  }

  public onChange(item:any){
    this.item = item;
    this.showPopap = false;
    this.setSelection(item);
    this.event.emit(item);
  }

  public findSelectionItem(){
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i].selection)
        return this.items[i];
    }
    return {title:"", selection:false};
  }

  public setSelection(item:any){
    for(let i = 0; i < this.items.length; i++){
      this.items[i].selection = (this.items[i] == item) ? true : false;
    }
  }

  public isImage(){
    for(let i = 0; i < this.items.length; i++){
      if(typeof this.items[i].image === "undefined")
        return false;

      if(this.items[i].image !== "")
        return true;
    }
    return false;
  }

  public isIcons(){ 
    for(let i = 0; i < this.items.length; i++){
      if(typeof this.items[i].icon === "undefined")
       return false;

      if(this.items[i].icon !== "")
        return true;
    }
    return false;
  }

  public getEmptyItem(){
    return {title:"", image:"", icon:"", selection:true};
  }
}
