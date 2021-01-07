import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {LoggerService} from '../../../../../services/logger/logger.service';
import {FetchService} from '../../../../../services/fetch/fetch.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  list;
  private listSub = new Subscription();

  ngOnDestroy(): void {
    this.listSub.unsubscribe();
  }

  constructor(private logger: LoggerService, private fetch: FetchService) {
  }
  ngOnInit(): void {
    this.logger.debug('init HomeComponent');
    this.listSub = this.fetch.list$.subscribe(result => {
      if (typeof result === 'object' && result !== null && !Array.isArray(result)) {
        this.list = result;
      }
    });
  }

}
