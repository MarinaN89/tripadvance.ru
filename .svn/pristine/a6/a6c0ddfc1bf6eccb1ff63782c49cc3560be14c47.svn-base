import { Component, Input, Output, ContentChildren, EventEmitter, ChangeDetectorRef, AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';
import { PanelPageComponent } from '../panel-page/panel-page.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements AfterContentChecked {
  @Input() setPage: number = 0;
  @ContentChildren(PanelPageComponent) elPages!: any;

  countPages: number = 0;
  activeIndex: any = 0;
  activePage: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    if (this.elPages) {
      this.countPages = this.elPages.length;

      if (this.elPages.length > 0) {
        this.activePage = this.elPages.get(this.activeIndex);
      }

      if (this.activePage && !this.activePage.visible) {
        this.activePage.visible = true;
      }

      this.cdr.detectChanges();
    }
  }

  setIndexOfPage(index: number) {
    if(index >= 0 && index < this.elPages.length){
      this.checkPage(this.elPages.get(index));
    }
  }

  checkPage(page: PanelPageComponent) {
    var index = this.elPages.toArray().indexOf(page);
    this.activeIndex = index;

    if (page != this.activePage) {
      this.activePage.visible = false;
      page.visible = true;
      this.activePage = page;
    }
  }

  isSeparator(page: PanelPageComponent) {
    var index = this.elPages.toArray().indexOf(page);

    if (index == this.activeIndex - 1) {
      return false;
    }

    if (page != this.activePage && this.elPages.last != page) {
      return true;
    }
    return false;
  }
}
