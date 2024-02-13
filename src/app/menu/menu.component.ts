import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss','./menu.component-mobile.scss']
})
export class MenuComponent  implements AfterViewInit {

  //menuActive: string = "main";
  @ViewChild("main", { static: false }) menuMain!: ElementRef;
  @ViewChild("services", { static: false }) menuServices!: ElementRef;
  @ViewChild("devices", { static: false }) menuDevices!: ElementRef;
  @ViewChild("programs", { static: false }) menuPrograms!: ElementRef;
  @ViewChild("developments", { static: false }) menuDevelopments!: ElementRef;
  @ViewChild("integrations", { static: false }) menuIntegrations!: ElementRef;
  @ViewChild("company", { static: false }) menuCompany!: ElementRef;
  @ViewChild("contacts", { static: false }) menuContacts!: ElementRef;
  @ViewChild("active", { static: false }) menuActive!: ElementRef;

  @Output('onChange') event = new EventEmitter<any>();
  @ViewChild("wrapper", { static: false }) wrapper!: ElementRef;

  navIsToggled = false;






  constructor(
    private renderer: Renderer2, private router: Router, private route: ActivatedRoute, public site:SiteService,
  ) {
    
  }

  ngOnInit(): void {   

    
  }

  navigateTo(route: any) {
    if(route != undefined){
      this.router.navigate(["/" + route]);
    }

  }

  toggleNav() {
    this.navIsToggled = !this.navIsToggled;
    this.wrapper.nativeElement.classList.toggle('nav-is-toggled');
    //document.body.classList.toggle('nav-is-toggled')
  }


  IsItemByHRef(url:any, item:any):boolean{
    var result = false;
    if(item.href == url)
      result = true;

    if(result == false){
      if(item.items != undefined){
        for(var i = 0; i < item.items.length; i++){
          if(result = this.IsItemByHRef(url, item.items[i])){
            return result;
          }
        }
      }
    }
    return result;
  }

  IsActiveMenu(item:any){
    var url = this.router.url.substring(1);

    return this.IsItemByHRef(url, item);

  }



  ngAfterViewInit(): void{


    if(!this.site.IsPlatformBrowser())
      return;

    var url = this.router.url.substring(1);
    if(url == ""){
      var el = document.querySelector('[title="Главная"]');

      this.setMenuActive(el);
    }

   


    //this.setMenuActive(this.menuMain);
    
    const navExpand = Array.from(document.querySelectorAll('.nav-expand')) as HTMLElement[];
    const backLink = `<li class="nav-item">
      <a class="nav-link nav-back-link" href="javascript:;">
        Back
      </a>
    </li>`
    
    
    navExpand.forEach((item: HTMLElement) => {
      
      //item.querySelector('.nav-expand-content')?.insertAdjacentHTML('afterbegin', backLink);
      item.querySelector('.nav-link')?.addEventListener('click', () => item.classList.add('active'));
      item.querySelector('.nav-back-link')?.addEventListener('click', () => item.classList.remove('active'));
    
    });


    
    // ---------------------------------------
    // not-so-important stuff starts here
    
    const ham = document.getElementById('ham');
    ham!.addEventListener('click', function() {
      document.body.classList.toggle('nav-is-toggled')
    })
    
    
  }


  getMenuActive(){
    return "";//return this.menuActive;
  }

  setMenuActive(nativeElement:any){
    try{
      var active = this.menuActive;
      var width = nativeElement.offsetWidth;
      var left = nativeElement.offsetLeft;
  
      this.renderer.setStyle(active.nativeElement, 'width', `${width}px`);
      this.renderer.setStyle(active.nativeElement, 'left', `${left}px`);

       
    }catch(e){
      //console.log(e);
    }
  
  }

  setMenuMouseEnter(value:string){
    //this.menuActive = value;
  }

  getMenuAction(){
    var items = [      
      {title:'Главная', selection:false, value:'main'}, 
      {title:'Услуги', selection:false, value:'services'}, 
      {title:'Оборудование', selection:false, value:'devices'},
      {title:'Программы', selection:false, value:'programs'},
      {title:'Разработки', selection:false, value:'developments'},
      {title:'Интеграции', selection:false, value:'integrations'},
      {title:'О компании', selection:false, value:'company'},
      {title:'Контакты', selection:false, value:'contacts'}  
    ];
    return items;
  }
}
