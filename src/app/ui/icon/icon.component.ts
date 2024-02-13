import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Output('event') event = new EventEmitter<any>();
  @Output('onHover') eventHover = new EventEmitter<boolean>();
  @Output('onClick') eventClick = new EventEmitter<any>();

  @Input() color = "black";
  @Input() size = "";
  @Input() background = "transparent";
  @Input() path = "assets/icons/";

  public icon_name = "";
  public href = "";

  
  @Input()
  set name(value: string){
    this.icon_name = value;
    this.href = this.path + value + ".svg#" + value;
  }

  constructor() {
  }

  ngOnInit(): void {
      this.href = this.path + this.icon_name + ".svg#" + this.icon_name;
  }

  onClick(){
    this.event.emit("click");
    this.eventClick.emit();
  }

  onHoverEnter(){
    this.event.emit("enter");
    this.eventHover.emit(true);
  }
  
  onHoverLeave(){
    this.event.emit("leave");
    this.eventHover.emit(false);
  }
}
