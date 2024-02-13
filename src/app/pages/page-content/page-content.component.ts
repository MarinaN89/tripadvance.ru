import { Component, Input } from '@angular/core';
import { SiteService } from 'src/app/site.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent {
  @Input() title:any = "";
  @Input() description: any = "";

  public page:any = {};
  public buttonDescriptionMobile:any = false;

  constructor(private router: Router, private route: ActivatedRoute, public site:SiteService){}

  ngOnInit(): void{
    var url = this.router.url.substring(1);
    for(var i = 0; i < this.site.pages.length; i++){
      if(this.site.pages[i].url == url){
        this.page = this.site.pages[i];
        break;
      }
    }
  }
  ngAfterViewInit(): void{
    /*

    */
  }
}
