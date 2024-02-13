import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

  @Input() open:boolean = false;
  @Input()
  set setOpen(open:boolean){
    this.open = open;
    this.arrowClass = (open == true) ? "open" : "";
  }

  public arrowClass:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
