import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private accountService = inject(AccountService);
cancelRegister = output<boolean>();
protected creds = {} as RegisterCreds;

protected register(){
  this.accountService.register(this.creds).subscribe({
    next: user => {
      console.log('Registration successful', user);
      if (user) {
        this.cancel();
      }
    },
    error: err => {
      console.error('Registration failed', err);
    }
  });
}

cancel() {
  this.cancelRegister.emit(false);
}

}
