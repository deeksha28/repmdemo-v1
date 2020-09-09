import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { TabService } from '../../tab.service';
import { Router, NavigationEnd   } from '@angular/router';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public redirectURL = environment.redirectingURL;
  public showLabels = true;
  public showPortfolio = false;
  viewPortfolio: boolean = false
  tabs = [];
 

  constructor(private ds: DataService,public tabService: TabService, private router : Router) { }

  ngOnInit(): void {
    this.ds.portfolioToggle.subscribe((value) => {
      this.viewPortfolio = value
    })
    this.tabs = this.tabService.tabs;
  }

  toggleViewLabels() {
    this.showLabels = !this.showLabels;
  }

  toggleViewPortfolio() {
    this.showPortfolio = !this.showPortfolio;
  }
  closeTab(index: number, event: Event,url) {
    
    this.tabService.deleteTab(index);
    if(this.tabService.getTab().length == 0){
      this.router.navigateByUrl('/')
    }
    event.preventDefault();
    console.log(this.tabService.activeUrl);
  }
  onTabChange(event) {
    this.ds.tabValueSubject.next(this.tabs.find(tab=>tab.tabId == event.nextId))
    this.router.navigateByUrl(this.tabs.find(tab=>tab.tabId == event.nextId).url);
  }

  
}
