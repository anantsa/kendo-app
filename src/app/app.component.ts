import { Component, ViewChild, NgZone, AfterViewInit } from '@angular/core';
import { sampleProducts } from './products';
import { GridComponent } from '@progress/kendo-angular-grid';
import { take } from 'rxjs/operators';
import { getLocaleTimeFormat } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // page size

  public data: any[];

  title = 'kendo-app';
  public sampleProducts: any[] = sampleProducts;

  // two-way data-binding with datepicker  
  value: Date = new Date();
  dob: Date = new Date(1995, 7, 7, 12, 30, 10);
  min: Date = new Date(2019, 0, 1);
  max: Date = new Date(2019, 12, 1);
  dateChange() {
    console.log('consoling ::', this.value);
  }
  // fiting columns
  @ViewChild(GridComponent)
  public grid: GridComponent;

  constructor(private ngZone: NgZone) { }
  public ngAfterViewInit() {
    this.fitColumns();

  }
  public onDataStateChange() {
    this.fitColumns();
  }
  private fitColumns() {
    this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
      this.grid.autoFitColumns;
    })
  }

}


