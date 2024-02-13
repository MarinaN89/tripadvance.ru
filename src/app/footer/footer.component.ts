import { Component } from '@angular/core';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    public site:SiteService,
  ) {
    
  }
}
