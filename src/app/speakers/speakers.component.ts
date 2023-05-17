import { Component, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SpeakersService } from '../services/speakers.service';
import { NavigationService } from '../services/navigation.service';
import { Speaker } from '../shared/speaker';
import { SpeakersResult } from '../shared/speakers-result';

@Component({
  selector: 'speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent {

  dataSource: MatTableDataSource<Speaker>;
  displayedColumns = ['speacker', 'email', 'phone', 'cell'];
  @ViewChild('paginator') paginator!: MatPaginator;

  length = 100;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 20, 50, 100];
  pageEvent: PageEvent = new PageEvent();

  speaker!: Speaker;

  constructor(
    private speakersService: SpeakersService,
    private navigationService: NavigationService
  ) {
    this.dataSource = new MatTableDataSource<Speaker>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter) => {
      const fullName = `${data.name.title} ${data.name.first} ${data.name.last}`.toLowerCase();
      return fullName.includes(filter);
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.loadData();
  }

  loadData() {
    this.speakersService.getPage(this.pageSize, this.pageIndex + 1).subscribe((data: SpeakersResult) => {
      this.dataSource.data = data.results;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToDetails(speaker: Speaker) {
    this.navigationService.goToDetails(speaker);
  }
}
