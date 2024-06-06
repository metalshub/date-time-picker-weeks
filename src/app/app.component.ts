import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { Moment } from 'moment';
import * as moment from 'moment-timezone';

import { OwlDateTimeComponent } from '../../projects/picker/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('date_range_component', { static: true })
  date_range_component: OwlDateTimeComponent<AppComponent>;
  public selectedMoments: Moment[] = [
    moment().tz('Europe/Berlin'),
    moment().tz('Europe/Berlin')
  ];


  currentValue: Date = new Date('5/9/2024, 12:00 AM');
  endValue: Date = new Date('5/14/2024, 11:59 PM');

  open_once = false;

  ngAfterViewInit() {
  }

  selectedTrigger(_date) {
    console.log(_date);
  }
}
