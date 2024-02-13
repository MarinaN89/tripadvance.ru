import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.scss']
})
export class ButtonDetailComponent {
  @Input() href:any = "";
  @Output('onClick') event = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute, ){}
  
  navigateTo(url: any) {

    this.event.emit(url);

    if(url == "")
      return;

    this.router.navigate(["/" + url]);

    /*
    this.router.navigate([], {
      queryParams: {
        id: '123'
      },
      queryParamsHandling: 'merge',
    });
    */
  }
}
