import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  @Input() data: string;
  @Input() size: string;
  @Input() color: string;
  @Input() space: string;
  iconData: string;
  iconSize: string;
  iconColor: string;
  iconSpace: string;

  constructor() { }

  ngOnInit(): void {
    this.iconData = this.data;
    this.iconSize = this.size;
    this.iconColor = this.color;
    this.iconSpace = this.space;
  }

}
