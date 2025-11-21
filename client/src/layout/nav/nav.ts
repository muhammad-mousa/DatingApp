import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
protected accountService = inject(AccountService);
protected creds: any = {};
private router = inject(Router);
login() {
  this.accountService.login(this.creds).subscribe({
    next: (response) => {
      this.router.navigateByUrl('/members');
      this.creds = {};
    },
    error: (error) => {
      alert(error.message);
    }
  });
}

logout() {
this.accountService.logout();
this.router.navigateByUrl('/');
}
}
