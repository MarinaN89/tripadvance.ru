import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, QueryList, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { SliderAnimationType } from '../ui/slider/slider.enum';
import { SliderComponent } from '../ui/slider/slider.component';
import { SlideComponent } from '../ui/slide/slide.component';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  
  @ViewChildren(SliderComponent) sliders!: QueryList<SliderComponent>;
  public animationType: SliderAnimationType = SliderAnimationType.EaseInOutSine;
  public animationDuration: number = 300;

  currentMenu: any = {};
  currentPacket: any = [];
  currentPackageIndex: number = 0;
  currentPacketTitle:string = "";
  clientWidth: number = 0;

  menu: any = [
    {name: "1С:ОТЕЛЬ", element: undefined, packet: this.site.packages.hotel, active: false, 
      description: 'Проведем аудит и предложим правильное программное обеспечивание, как в базовой конфигурации, так и в индивидуальной. Внедрим и настроим программы на любом этапе, обучим персонал и закроем белые пятна в работе. Настроим сложные интеграции и создадим структуру по обмену данных. Разработаем новые печатные формы и отчеты. Синхронизируем кассы-онлайн, интернет эквайринг. Осуществляем базовую и расширенную техническую поддержку'},
    {name: "БИТРИКС 24", element: undefined,packet: this.site.packages.bitrix, active: false, 
      description: 'Проведем аудит и предложим правильное программное обеспечивание, как в базовой конфигурации, так и в индивидуальной. Внедрим и настроим программы на любом этапе, обучим персонал и закроем белые пятна в работе. Настроим сложные интеграции и создадим структуру по обмену данных. Разработаем новые печатные формы и отчеты. Синхронизируем кассы-онлайн, интернет эквайринг. Осуществляем базовую и расширенную техническую поддержку'},
    {name: "МОДУЛЬ БРОНИРОВАНИЯ", element: undefined,packet: this.site.packages.module, active: false, 
      description: 'Проведем аудит и предложим правильное программное обеспечивание, как в базовой конфигурации, так и в индивидуальной. Внедрим и настроим программы на любом этапе, обучим персонал и закроем белые пятна в работе. Настроим сложные интеграции и создадим структуру по обмену данных. Разработаем новые печатные формы и отчеты. Синхронизируем кассы-онлайн, интернет эквайринг. Осуществляем базовую и расширенную техническую поддержку'},
    {name: "КАССЫ", element: undefined,packet: this.site.packages.kassa, active: false, 
      description: 'Проведем аудит и предложим правильное программное обеспечивание, как в базовой конфигурации, так и в индивидуальной. Внедрим и настроим программы на любом этапе, обучим персонал и закроем белые пятна в работе. Настроим сложные интеграции и создадим структуру по обмену данных. Разработаем новые печатные формы и отчеты. Синхронизируем кассы-онлайн, интернет эквайринг. Осуществляем базовую и расширенную техническую поддержку'},
    
    {name: "ИНТЕГРАЦИИ", element: undefined, packet: this.site.packages.integration, active: false, 
      description: 'Проведем аудит и предложим правильное программное обеспечивание, как в базовой конфигурации, так и в индивидуальной. Внедрим и настроим программы на любом этапе, обучим персонал и закроем белые пятна в работе. Настроим сложные интеграции и создадим структуру по обмену данных. Разработаем новые печатные формы и отчеты. Синхронизируем кассы-онлайн, интернет эквайринг. Осуществляем базовую и расширенную техническую поддержку'},
      
    {name: "ИНТЕГРАЦИИ2", element: undefined, packet: this.site.packages.integration, active: false, 
      description: 'Проведем аудит и предложим правильное программное обеспечивание, как в базовой конфигурации, так и в индивидуальной. Внедрим и настроим программы на любом этапе, обучим персонал и закроем белые пятна в работе. Настроим сложные интеграции и создадим структуру по обмену данных. Разработаем новые печатные формы и отчеты. Синхронизируем кассы-онлайн, интернет эквайринг. Осуществляем базовую и расширенную техническую поддержку'},
    {name: "ИНТЕГРАЦИИ3", element: undefined, packet: this.site.packages.integration, active: false, 
      description: 'Проведем аудит и предложим правильное программное обеспечивание, как в базовой конфигурации, так и в индивидуальной. Внедрим и настроим программы на любом этапе, обучим персонал и закроем белые пятна в работе. Настроим сложные интеграции и создадим структуру по обмену данных. Разработаем новые печатные формы и отчеты. Синхронизируем кассы-онлайн, интернет эквайринг. Осуществляем базовую и расширенную техническую поддержку'},
  ];

  constructor(
    private renderer: Renderer2,
    private cdref: ChangeDetectorRef,
    public site:SiteService
  ) {
    if(site.IsPlatformBrowser())
      this.clientWidth = document.body.clientWidth;
  }



  //menuActive: string = "main";
  @ViewChild("hotel", { static: false }) menuHotel!: ElementRef;
  @ViewChild("bitrix", { static: false }) menuBitrix!: ElementRef;
  @ViewChild("module", { static: false }) menuModule!: ElementRef;
  @ViewChild("kassa", { static: false }) menuKassa!: ElementRef;
  @ViewChild("integration", { static: false }) menuIntegration!: ElementRef;
  @ViewChild("active", { static: false }) menuActive!: ElementRef;
  @ViewChild("integration2", { static: false }) menuIntegration2!: ElementRef;
  @ViewChild("integration3", { static: false }) menuIntegration3!: ElementRef;

  currentMenuActive:any;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(this.site.IsPlatformBrowser())
      this.clientWidth = document.body.clientWidth;
  }
  ngOnInit(): void {   
    this.currentPacket = this.site.packages.hotel;
  }

  changeBlock(blocks:any, item:any){
    for(var i = 0; i < blocks.length; i++){
      if(blocks[i] == item){
        blocks[i].open = !blocks[i].open;
      }else
        blocks[i].open = false;
    }
  }

  ngAfterViewInit(): void{
    if(this.site.IsPlatformBrowser()){
      this.setMenuActive(this.menuHotel);
    }
  }

  ngAfterContentInit(): void{
    if(this.site.IsPlatformBrowser()){
      this.menu[0].element = this.menuHotel;
      this.menu[1].element = this.menuBitrix;
      this.menu[2].element = this.menuModule;
      this.menu[3].element = this.menuKassa;
      this.menu[4].element = this.menuIntegration;
      this.menu[5].element = this.menuIntegration2;
      this.menu[6].element = this.menuIntegration3;
    }
  }

  
  menuChangeAnimate(event:any){
    if(event.direction > 0){
      var index = this.getNextMenuIndex();
      this.setMenuActive(this.menu[index].element, true);
    }else{
      var index = this.getPrevMenuIndex();
      this.setMenuActive(this.menu[index].element, true);
    }
  }

  getMenuActive(){
    return this.menuActive;
  }

  getCountPackages(){
    console.log(this.currentPacket.length);
    return this.currentPacket.length;
  }
  
  getTranslateX(element:any) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  setMenuActive(element:any, animate = true){

    //console.log(element.nativeElement.parentElement.parentElement);
    //console.log(element.nativeElement.parentElement.parentElement.offsetLeft);

    //console.log(this.getTranslateX(element.nativeElement.parentElement.parentElement));

    var active = this.menuActive;
    var width = element.nativeElement.offsetWidth;
    var left = this.getTranslateX(element.nativeElement.parentElement.parentElement);//element.nativeElement.parentElement.parentElement.offsetLeft;
    left += (element.nativeElement.firstElementChild||element.nativeElement.firstChild).offsetLeft;
    width=(element.nativeElement.firstElementChild||element.nativeElement.firstChild).offsetWidth;
    //console.log((element.nativeElement.firstElementChild||element.nativeElement.firstChild));
    this.currentMenuActive = element;

    this.renderer.setStyle(active.nativeElement, 'width', `${width}px`);
    this.renderer.setStyle(active.nativeElement, 'left', `${left}px`);
    if(animate){
      this.renderer.setStyle(active.nativeElement, 'transition', `0.2s`);
    }
    else{
      this.renderer.setStyle(active.nativeElement, 'transition', `all 0.0s ease 0s`);
    }
    

    for(var i = 0; i < this.menu.length; i++){
      this.menu[i].active = false;
      if(this.menu[i].element == element){
        this.menu[i].active = true;
        this.changeMenu(this.menu[i]);
        this.currentMenu = this.menu[i];
      }   
    }

    /*
    if(element == this.menuHotel)
      this.changeMenu(this.packages.hotel, "1С:ОТЕЛЬ");
    else if(element == this.menuBitrix)
      this.changeMenu(this.packages.bitrix, "БИТРИКС 24");
    else if(element == this.menuModule)
      this.changeMenu(this.packages.module, "МОДУЛЬ БРОНИРОВАНИЯ");
    else if(element == this.menuKassa)
      this.changeMenu(this.packages.kassa, "КАССЫ");
    else if(element == this.menuIntegration)
      this.changeMenu(this.packages.integration, "ИНТЕГРАЦИИ");

    */
  }

  changeMenu(item:any){
    this.currentPacket = item.packet;
    this.currentPacketTitle = item.name;
    this.sliders.last.ngAfterViewInit();
  }

  setMenuMouseEnter(value:string){
    //this.menuActive = value;
  }

  menuAnimate(){
    this.setMenuActive(this.currentMenuActive, false);
  }

  menuNext(){
    this.sliders.first.next();

  }

  menuPrev(){
    this.sliders.first.prev();
  }

  getNextMenuIndex(){
    var nextIndex = 0;
    for(var i = 0; i < this.menu.length; i++){
      if(this.menu[i].element == this.currentMenuActive){
        nextIndex = i + 1;
        break;
      }
    }
    if(nextIndex >= this.menu.length)
      nextIndex = 0;
    
    return nextIndex;
  }

  getPrevMenuIndex(){
    var nextIndex = 0;
    for(var i = 0; i < this.menu.length; i++){
      if(this.menu[i].element == this.currentMenuActive){
        nextIndex = i - 1;
        break;
      }
    }
    if(nextIndex < 0)
      nextIndex = this.menu.length - 1;
    
    return nextIndex;
  }
  getMenuAction(){
    var items = [      
      {title:'1С:ОТЕЛЬ', selection:false, value:'hotel'}, 
      {title:'БИТРИКС 24', selection:false, value:'bitrix'}, 
      {title:'МОДУЛЬ БРОНИРОВАНИЯ', selection:false, value:'module'},
      {title:'КАССЫ', selection:false, value:'kassa'},
      {title:'ИНТЕГРАЦИИ', selection:false, value:'integration'},
    ];
    return items;
  }

  getMenuActionTitle(){
    return this.currentPacketTitle;
  }

  productNext(){
    console.log();
    this.sliders.first.next();
  }
  productPrev(){
    this.sliders.first.prev();
  }

  packetNext(){
    console.log();
    this.sliders.last.next();
  }
  packetPrev(){
    this.sliders.last.prev();
  }

  getCountViewSliderPacket(){

    if(this.clientWidth <= 850)
      return 1;
    if(this.clientWidth <= 1200)
      return 2;
    return 3;
    
  }

  onChangePackage(event:any){
    this.currentPackageIndex = event.current;
  }
  onChangeMenuMobile(event:any){
    console.log(event);
    
    this.setMenuActive(this.menu[event.current].element);
    /*
    switch(event.current){
      case 0: { this.setMenuActive(this.menuHotel); break;}
      case 1: { this.setMenuActive(this.menuBitrix); break;}
      case 2: { this.setMenuActive(this.menuModule); break;}
      case 3: { this.setMenuActive(this.menuKassa); break;}
      case 4: { this.setMenuActive(this.menuIntegration); break;}    
    }
    */
  }
}
