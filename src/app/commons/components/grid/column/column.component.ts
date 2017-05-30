import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ss-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input('col-xs') col_xs: number;
  @Input('col-sm') col_sm: number;
  @Input('col-md') col_md: number;
  @Input('col-lg') col_lg: number;
  @Input('col-xs-offset') col_xs_offset: number;
  @Input('col-sm-offset') col_sm_offset: number;
  @Input('col-md-offset') col_md_offset: number;
  @Input('col-lg-offset') col_lg_offset: number;

  constructor() { }

  ngOnInit() {
    console.log('col-xs = ' + this.col_xs);
    console.log('col-md = ' + this.col_md);
  }

}
