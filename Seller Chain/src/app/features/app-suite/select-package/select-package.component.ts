import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-package',
  templateUrl: './select-package.component.html',
  styleUrls: ['./select-package.component.scss']
})
export class SelectPackageComponent implements OnInit {
  isShow = false;
  isShow2 = false;
  isShow3 = false;
  constructor() { }

  ngOnInit(): void {
  }

}
