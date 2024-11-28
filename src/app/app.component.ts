import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrawlerService } from './crawler.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headers: string[] = [];
  private crawlerService = inject(CrawlerService);

  constructor() {
    // Optional: Call this in the constructor if you want the headers to load when the component is initialized
    // this.fetchHeaders();
  }

  fetchHeaders() {
    this.crawlerService.getHeaders().subscribe((data: string[]) => {
      this.headers = data;
    });
  }
}
