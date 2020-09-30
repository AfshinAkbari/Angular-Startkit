import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-base",
  template: `
    NO UI TO BE FOUND HERE!
  `,
  styleUrls: []
})
export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
