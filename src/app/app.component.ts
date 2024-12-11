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
  title = 'practice';
  headers: string[] = [];
  descriptions: string[] = [];
  loading= false; // Show spinner during fetch

  private crawlerService = inject(CrawlerService);

  fetchHeaders() {
    this.loading = true; // Start spinner
    this.crawlerService.getHeaders().subscribe((data: string[]) => {
      this.headers = data;
      this.loading = false; // Stop spinner
    });
  }

  fetchDescriptions() {
    this.loading = true; // Start spinner
    this.crawlerService.getDescriptions().subscribe((data: string[]) => {
      this.descriptions = data;
      this.loading = false; // Stop spinner
    });
  }
}
