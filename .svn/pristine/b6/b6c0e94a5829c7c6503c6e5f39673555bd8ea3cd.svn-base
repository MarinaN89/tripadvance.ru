import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate, stagger, query, useAnimation } from '@angular/animations';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [
    trigger('menu-collapsed', [
      state('collapsed', style(
        {height: '0px', 'margin-top': '0px'})),
      state('expanded', style({
        height: '*'
      })),
      transition('collapsed => expanded', [
        animate('0.15s')
      ]),
      transition('expanded => collapsed', [
        animate('0.15s')
      ]),
    ])
  ]
})
export class LeftMenuComponent {

  menuStatuses:Map<any, string> = new Map<any, string>();
  currentURL: any = "";

  constructor(
    private renderer: Renderer2, private router: Router, private route: ActivatedRoute, public site:SiteService,
  ) {
    
  }

  

  ngOnInit(): void {   
    
    var url = this.router.url.substring(1);
    this.currentURL = url;

    

    for(var n1 = 0; n1 < this.site.menu.length; n1++){
      var status = "collapsed";
      if(url.indexOf(this.site.menu[n1].href) >= 0){
        status = "expanded";
        this.currentURL = this.site.menu[n1].href;
      }

      this.menuStatuses.set(this.site.menu[n1], status);

      var isExpanded1 = false;

      for(var n2 = 0; n2 < this.site.menu[n1].items.length; n2++){
        let items2 = this.site.menu[n1].items;

        var status = "collapsed";
        if(url.indexOf(items2[n2].href) >= 0){
          status = "expanded";
          isExpanded1 = true;
          this.currentURL = items2[n2].href;
        }

        this.menuStatuses.set(items2[n2], status);
  
        var isExpanded2 = false;
        for(var n3 = 0; n3 < items2[n2].items.length; n3++){

          let items3 = items2[n2].items;
          var status = "collapsed";

          if(url.indexOf(items3[n3].href) >= 0){
            status = "expanded";
            isExpanded2 = true;
            this.currentURL = items3[n3].href;
          }

          this.menuStatuses.set(items3[n3], status);

          //var isExpanded3 = false;

          //for(var n4 = 0; n4 < items3[n3].items.length; n4++){

           // let items4 = items3[n3].items;
           // var status = "collapsed";
  
            //if(url.indexOf(items4[n4].href) >= 0){
             // status = "expanded";
            //  isExpanded3 = true;
            //  this.currentURL = items4[n4].href;
           // }
  
            //this.menuStatuses.set(items4[n4], status);
          //}

          //if(isExpanded3){
           // this.menuStatuses.set(items3[n3], "expanded");
          //  isExpanded2 = true;
          //}

        }

        if(isExpanded2){
          this.menuStatuses.set(items2[n2], "expanded");
          isExpanded1 = true;
        }
      }

      if(isExpanded1){
        this.menuStatuses.set(this.site.menu[n1], "expanded");
      }
    }
    

    //console.log(this.menuStatuses);
    
  }

  navigateTo(route: any) {
    this.router.navigate(["/" + route]);
  }

  clickItem(item:any){
    if(this.menuStatuses.get(item) == 'expanded')
      this.menuStatuses.set(item, 'collapsed');
    else
      this.menuStatuses.set(item, 'expanded');
    if(item.href != undefined && item.href != ""){
      this.router.navigate(["/" + item.href]);
    }
  }

  
}
