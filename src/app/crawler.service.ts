import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrawlerService {
  private apiUrl = '/api'; // Proxy endpoint

  constructor(private http: HttpClient) {}

  getHeaders(): Observable<string[]> {
    return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
      map((response: string) => {
        // Extract headers from the response
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, 'text/html');
        return Array.from(doc.querySelectorAll('h1, h2, h3')).map(
          (el) => el.textContent?.trim() || ''
        );
      })
    );
  }
}