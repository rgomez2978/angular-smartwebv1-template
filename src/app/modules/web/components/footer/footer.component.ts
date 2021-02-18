import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() data: any;
  dataFooter: any;

  constructor() { }

  ngOnInit(): void {
    this.dataFooter = this.data;
  }

}
