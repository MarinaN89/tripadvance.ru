import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SiteService } from '../../site.service';




@Component({
  selector: 'app-cash-registers',
  templateUrl: './devices-cash-registers.component.html',
  styleUrls: ['./devices-cash-registers.component.scss']
})
export class DevicesCashRegistersComponent {
  page:any = {};
  allProducts: any = true;
  device: any = undefined;
  products: any = [];

  constructor(
    private renderer: Renderer2, private router: Router, private route: ActivatedRoute, public site:SiteService,
  ) {
        this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.device = undefined;
        this.route.queryParams.subscribe(params => {
          if(params["id"] != undefined){
            this.device = this.site.GetDevice(params["id"]);
          }
        });
     }
    });
  }
  ngOnInit(){
    /*
    console.log(this.router.url);
    var id = "";

    this.route.params.subscribe(
      (params: Params) => {
       id = params['id'];
      }
    );
    this.page = this.site.GetCurrentPage();
    console.log(id);
    */
    this.page = this.site.GetCurrentPage();
    if(this.device == undefined){
      this.products = this.site.GetProducts(this.page.products);
    }
  }
  test(){
    console.log("Нажата кнопка")
  }
}
