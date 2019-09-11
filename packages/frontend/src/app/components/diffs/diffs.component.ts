import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import Diff = moment.unitOfTime.Diff;
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-diffs',
  templateUrl: './diffs.component.html',
  styleUrls: ['./diffs.component.sass']
})
export class DiffsComponent implements OnInit {

  @Input()
  public offsetDate = this.storage.myBirthday;

  @Input()
  public selectedYear: number;

  @Input()
  public hideSeconds = false;

  constructor(public storage: StorageService) { }

  ngOnInit() {
  }

  public w(to: any, d: Diff) {
    let bd = moment(this.offsetDate);
    return Math.abs(bd.diff(`${to}-01-01`, d, false));
  }

  public diff(to: any, d: Diff) {
    return Math.abs(moment().diff(`${to}-01-01`, d));
  }

}
