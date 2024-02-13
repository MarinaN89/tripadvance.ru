import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen: boolean = false;
  @ViewChild("hamburger", { static: false }) hamburger!: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, ){}

  getNavigationAction(){
    var items = [      
      {title:'Наши партнеры', selection:false, value:'partner'}, 
      {title:'Обучение', selection:false, value:'training'}, 
      {title:'Бесплатная консультация', selection:false, value:'consultation'}
    ];
    return items;
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
  openPageSearch(event:any){
    if(event != "")
      this.router.navigate(['search'],{ queryParams: {value: event}});
  }

  openPage(page:any){
    this.router.navigate([page]);
    this.menuOpen = false;
    this.hamburger.nativeElement.checked = false;
  }
}
