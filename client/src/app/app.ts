import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = signal('DatingApp');

  ngOnInit(): void {
    this.http.get('https://localhost:7292/api/Members').subscribe({
      next: members => console.log(members),
      error: err => console.log(err)
    });
  }
}
