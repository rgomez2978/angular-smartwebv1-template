import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  @Input() data: any;
  @Input() size: string;
  @Input() color: string;
  @Input() space: string;
  iconColor: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.color === 'orig') {
        this.iconColor = this.data[0].title;
      } else {
        this.iconColor = this.color;
      }
      console.log('this.iconColor :>> ', this.iconColor);
    }, 100);
  }

}
