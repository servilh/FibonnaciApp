import { Component } from '@angular/core';
import { DataService, FibonnaciLog } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public logs: FibonnaciLog[] = [];
  public numberOfelements: number;

  constructor(private data: DataService) {
   
  }

  ionViewDidEnter() {
     this.data.getFibonnaciLogs().subscribe((response) => {
      this.logs = response;
    })
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  createHandler() {
    
    this.data.createFibonnaci(this.numberOfelements).subscribe((response) => {
      debugger;
      this.logs = response;
    });
  } 

}
