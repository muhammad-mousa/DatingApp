import { Component, inject, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';
import { RegisterCreds } from '../../../types/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  private accountService = inject(AccountService);
  cancelRegister = output<boolean>();
  protected creds = {} as RegisterCreds;
  protected registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      displayName: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  protected register() {
    console.log(this.registerForm.value)
    // this.accountService.register(this.creds).subscribe({
    //   next: user => {
    //     console.log('Registration successful', user);
    //     if (user) {
    //       this.cancel();
    //     }
    //   },
    //   error: err => {
    //     console.error('Registration failed', err);
    //   }
    // });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
