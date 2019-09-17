import { Pagination } from './../shared/models/pagination';
import { WorkItemService } from './services/work-item.service';
import { Component, OnInit } from '@angular/core';
import { WorkItem } from './models/work-item-model';
import { OrderPipe } from 'ngx-order-pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements Pagination, OnInit {

  collectionSize: number;
  pageSize: number;
  page: number;

  workitens: WorkItem[] = [];
  typeFilter = '';

  order = 'createDate';
  reverse = false;

  constructor(
    private workItemService: WorkItemService,
    private orderPipe: OrderPipe,
    private spinner: NgxSpinnerService
  ) {
    orderPipe.transform(this.workitens, 'createDate');
  }

  ngOnInit() {
    this.getWorkItens();
  }

  getWorkItens() {
    this.spinner.show();
    this.workItemService.getWorkItens(this.typeFilter)
      .subscribe((result) => {
        this.workitens = result;
        this.setPagination();
        this.spinner.hide();
      },
    (error) => {
      this.spinner.hide();
    });
  }

  setPagination() {
    this.collectionSize = this.workitens.length;
    this.pageSize = 5;
    this.page = 1;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
