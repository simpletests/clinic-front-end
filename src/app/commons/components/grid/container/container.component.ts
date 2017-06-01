import { Component, OnInit, Renderer, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ss-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() fluid: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    if (this.fluid) {
      this.renderer.setElementClass(this.el.nativeElement, 'container-fluid', true);
    } else {
      this.renderer.setElementClass(this.el.nativeElement, 'container', true);
    }
  }
}
