import { Component, OnInit } from '@angular/core';

import { FetchService } from './services/fetch/fetch.service';
import { LoggerService } from './services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CyberMDX';

  constructor(
    private logger: LoggerService,
    private fetch: FetchService,
    ) {}

  ngOnInit(): void {
    this.logger.debug('init AppComponent');
    this.bootstrap();
  }

  private bootstrap(): void {
    this.fetch.init();
  }
}
