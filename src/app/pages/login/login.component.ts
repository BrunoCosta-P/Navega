import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsivenessService } from 'src/app/shared/services/responsiveness.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./loginDesk.component.less', './loginMobile.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
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
