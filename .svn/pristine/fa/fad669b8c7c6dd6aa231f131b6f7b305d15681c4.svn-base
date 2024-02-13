import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-element-product-row',
  templateUrl: './element-product-row.component.html',
  styleUrls: ['./element-product-row.component.scss']
})
export class ElementProductRowComponent {
  @Input() item:any = {};
  open:any = false;

  constructor(private router: Router, private route: ActivatedRoute, ){}

  checkDescription(){
    this.open = !this.open;
  }

  openProduct(item:any){
    this.router.navigate([], {
      queryParams: {
        id: item.id
      },
      queryParamsHandling: 'merge',
    });
  }
}
