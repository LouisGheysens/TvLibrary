import { HostListener, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public year = new Date().getFullYear();
  public sideBarOpen: boolean | undefined;
  public showLayout = true;
  public loading: boolean = false;
  public activeUser: any;
  public isAdmin$: Observable<boolean> | undefined;
  public isCollapsed = false;
  public toInvoiceCount: number | undefined;
  loginDisplay = false;

  public errorCount: number | undefined;
  private subscriptions: Subscription[] = [];


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private layoutService: LayoutService
    ) { }


  ngOnInit(): void {
    let sidebar = localStorage.getItem('Sidebar');
    if (sidebar === 'true') {
      this.sideBarOpen = true;
    } else {
      this.sideBarOpen = false;
    }
  }




  trackByFunc(i: any, item: any) {
    return i;
  }

  clickSideBar() {
    this.sideBarOpen = !this.sideBarOpen;
    localStorage.setItem('Sidebar', JSON.stringify(this.sideBarOpen));
  }

  toggleCollapse($event: Event) {
    this.isCollapsed = !this.isCollapsed;
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event']) clickedOutside($event: any) {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    }
  }


  ngOnDestroy(): void {
    for (const subscr of this.subscriptions) {
      subscr.unsubscribe();
    }
  }

}
