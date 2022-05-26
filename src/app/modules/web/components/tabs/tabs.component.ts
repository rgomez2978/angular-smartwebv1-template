import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() data: any;
  @Input() type: any;

  constructor() {}

  ngOnInit(): void {}

  changeAtiveTab(event, tabID) {
    // console.log('event :>> ', event);
    // console.log('tabID :>> ', tabID);

    let element = event.target;
    while (element.nodeName !== 'A') {
      element = element.parentNode;
    }
    const ulElement = element.parentNode.parentNode;
    const aElements = ulElement.querySelectorAll('li > a');
    const tabContents = document
      .getElementById('tabs-id')
      .querySelectorAll('.tab-content > div');
    for (let i = 0; i < aElements.length; i++) {
      aElements[i].classList.remove('text-smart-300');
      aElements[i].classList.remove('font-medium');
      aElements[i].classList.add('text-gray-400');
      aElements[i].classList.add('font-normal');
      tabContents[i].classList.add('hidden');
      // tabContents[i].classList.remove('block');
    }
    element.classList.remove('font-normal');
    element.classList.remove('text-gray-400');
    element.classList.add('text-smart-300');
    element.classList.add('font-medium');

    document.getElementById(tabID).classList.remove('hidden');
    // document.getElementById(tabID).classList.add('block');
  }
}
