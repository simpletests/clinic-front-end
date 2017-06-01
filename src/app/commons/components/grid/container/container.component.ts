import { Component, OnInit, Renderer, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ss-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {
  
  @ViewChild('container') div: ElementRef;
  @Input() fluid: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.renderer.setElementClass(this.div.nativeElement, (this.fluid ? 'container-fluid' : 'container'), true);
  }
}
