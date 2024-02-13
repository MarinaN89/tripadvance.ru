import { Component, Input, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-panel-page',
  templateUrl: './panel-page.component.html',
  styleUrls: ['./panel-page.component.scss']
})
export class PanelPageComponent {
  @Input() title:any = "";
  @Input() type:any = "";
  @Input() image:any = "";

  public visible:boolean = false;

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit(){
    if (this.visible) {
      this.cdr.detectChanges();
    }

  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();

  }
}
