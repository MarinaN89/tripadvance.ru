import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-chapter',
  templateUrl: './element-chapter.component.html',
  styleUrls: ['./element-chapter.component.scss']
})
export class ElementChapterComponent {
  @Input() item: any = {};
}
