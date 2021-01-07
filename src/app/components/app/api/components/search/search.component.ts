import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../../../../services/logger/logger.service';
import {FetchService} from '../../../../../services/fetch/fetch.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  username = 'tom';

  constructor(
    private logger: LoggerService,
    private fetch: FetchService
  ) { }


  ngOnInit(): void {
    this.logger.debug('init api component');
  }

  onSearchChange(searchValue: string): void {
    // should implement debounce of 2 sec between users typings

    if (searchValue === '') {
      this.fetch.getData();

      return;
    }
    this.fetch.getDataByTitle(searchValue);
  }
}
