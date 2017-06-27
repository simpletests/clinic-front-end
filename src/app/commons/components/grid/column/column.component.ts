import { Component, OnInit, Input, Directive, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'ss-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}

@Directive({
  selector: '[col]'
})
export class ColMdDirective implements OnInit {

  @Input('columns') columns: number | number[] = 12;
  @Input('offsets') offsets: number | number[] = 0;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit(): void {
    if (this.columns) {
      if (this.columns instanceof Array) {
        this.setColuns(this.columns[0], this.columns[1], this.columns[2], this.columns[3]);
      } else {
        this.setColuns(12, 12, this.columns, this.columns);
      }
    }
    if (this.offsets) {
      if (this.offsets instanceof Array) {
        this.setOffsets(this.offsets[0], this.offsets[1], this.offsets[2], this.offsets[3])
      } else {
        this.setOffsets(this.offsets, this.offsets, this.offsets, this.offsets);
      }
    }
  }

  setColuns(xs, sm, md, lg) {
    this.renderer.setElementClass(this.el.nativeElement, 'col-xs-' + xs, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-sm-' + sm, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-md-' + md, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-lg-' + lg, true);
  }

  setOffsets(xs, sm, md, lg) {
    this.renderer.setElementClass(this.el.nativeElement, 'col-xs-offset-' + xs, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-sm-offset-' + sm, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-md-offset-' + md, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-lg-offset-' + lg, true);
  }
}
