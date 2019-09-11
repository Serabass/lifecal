import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-birthday-selector',
  templateUrl: './birthday-selector.component.html',
  styleUrls: ['./birthday-selector.component.sass']
})
export class BirthdaySelectorComponent implements OnInit {

  constructor(public storage: StorageService) { }

  ngOnInit() {
  }

}
