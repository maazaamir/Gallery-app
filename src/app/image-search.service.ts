import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageSearchService {
  query: any;
  searchImages() {}
  constructor(private http: HttpClient) {}

  async getRandomImages(): Promise<string[]> {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        count: '150',
        client_id: 'dmELPbE4tZhYq0ItCAXJHQSpsH1LPPqnP9UeCQ8UzOI',
      },
    });

    return response.data.map((image: any) => image.urls.small);
  }

  public async searchImageByQuery(query: string): Promise<any> {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${query}`,
      {
        params: {
          count:'latest,oldest,popular',
          client_id: 'yMXnT9WqdO6t1hL16BkJrHNJv5fvAZzNrKO9D6PgVGM',
        },
      }
    );

    return response.data.results.map((image: any) => image.urls.small);
  }
}
