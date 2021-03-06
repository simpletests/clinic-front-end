import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ss-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input('color') color = '';
  @Input('icon') icon: string;
}
