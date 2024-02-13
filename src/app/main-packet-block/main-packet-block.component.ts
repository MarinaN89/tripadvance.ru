import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-packet-block',
  templateUrl: './main-packet-block.component.html',
  styleUrls: ['./main-packet-block.component.scss']
})
export class MainPacketBlockComponent {
  @Input() public name:any = "";
}
