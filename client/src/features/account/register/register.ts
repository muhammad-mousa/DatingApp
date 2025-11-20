import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
public membersFromHome = input.required<User[]>();
protected creds = {} as RegisterCreds;

protected register(): void {
  console.log('Registering user with credentials:', this.creds);
}

cancel() {
  console.log('Registration cancelled.');
}

}
