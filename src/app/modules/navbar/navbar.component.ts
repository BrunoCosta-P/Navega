import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsivenessService } from '../../shared/services/responsiveness.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMobile: boolean = false;
  private mobileSubscription: Subscription | undefined;

  constructor(private readonly responsivenessService: ResponsivenessService) {}

  ngOnInit(): void {
    this.mobileSubscription = this.responsivenessService.isMobile$.subscribe(
      (isMobile) => {
        this.isMobile = isMobile;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.mobileSubscription) {
      this.mobileSubscription.unsubscribe();
    }
  }
}
