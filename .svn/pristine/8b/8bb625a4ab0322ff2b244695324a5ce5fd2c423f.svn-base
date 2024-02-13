import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit {

  public static s_uniqueID = 0;

  public uniqueID:any = 0;

  @Output('onChange') event = new EventEmitter<boolean>();
  @Input() value:any;
  @Input() enabled:any = false;

  constructor(){}

  ngOnInit() {
    this.uniqueID = CheckboxComponent.s_uniqueID++;
  }

  onChange(value:any){
    this.event.emit(value); 
  }

  getUniqueID(){
    return this.uniqueID;
  }
}
