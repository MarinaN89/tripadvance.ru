import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';
@Component({
  selector: 'app-developments-booking-module',
  templateUrl: './developments-booking-module.component.html',
  styleUrls: ['./developments-booking-module.component.scss']
})
export class DevelopmentsBookingModuleComponent {

  page:any = {};

  constructor(public site:SiteService){
  }

  ngOnInit(): void {   
    this.page = this.site.GetCurrentPage();
  }

  ngAfterContentInit(){
  }
}

