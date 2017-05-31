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
export class ColMd implements OnInit {

  @Input('columns') coluns: number | number[] = 12;
  @Input('offsets') offsets: number | number[] = 0;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit(): void {
    if (this.coluns) {
      if (this.coluns instanceof Array) {
        this.setColuns(this.coluns[0], this.coluns[1], this.coluns[2], this.coluns[3]);
      } else {
        this.setColuns(this.coluns, this.coluns, this.coluns, this.coluns);
      }
    }
    if (this.offsets) {
      if(this.offsets instanceof Array){
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
