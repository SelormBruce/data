import { Component, OnInit, ViewChild } from '@angular/core';
import { Userdetils } from '../userdetils';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ExecutiveServiceService } from '../service/executive-service.service';
import { User } from 'firebase';

@Component({
  selector: 'app-executivelist',
  templateUrl: './executivelist.component.html',
  styleUrls: ['./executivelist.component.css']
})
export class ExecutivelistComponent implements OnInit {


  logs: Userdetils[]; formvalue?: any;
  searchkey: string;
  signoutState = "Sign-out pending";
  logList: MatTableDataSource<any>;
  displayedColumns1: string[] = ['fullname', 'Phone', 'gender', 'Branch_Name', 'Position'];
  constructor(public servixe: ExecutiveServiceService, ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.servixe.executivesList().subscribe(
      list => {
        this.logs = list.map(
          items => {
            return {
              userId: items.payload.doc.id,
              ...items.payload.doc.data()
            } as Userdetils;

          }
        );
        this.logList = new MatTableDataSource(this.logs);
        this.logList.paginator = this.paginator;
      }
    );


  }
  onSearchClear() {
    this.searchkey = "";

  }
  applyFilter(filterValue: string) {
    this.logList.filter = filterValue.trim().toLowerCase();
  }
  onSelect(data: User) {
    this.formvalue = data;
  }

  signout() {
    this.signoutState = "Signout";
    alert('user Signed out ');

  }

  getValue(){
    
  }
}
