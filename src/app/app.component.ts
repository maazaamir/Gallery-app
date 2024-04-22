import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from './image-search.service'; // Adjust the path to your service file

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '';
  length: number = 60;
  images: string[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];
  componentname = "UNSPLASH++";
  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 14;
  loader: boolean = true;
  selectedCategory: string;
  filteredImages: string[];

  constructor(private imageSearchService: ImageSearchService) {}

  ngOnInit(): void {
    this.loadRandomImages();
  }
  
  loadRandomImages() {
    this.imageSearchService
      .getRandomImages()
      .then((images) => {
        this.images = images;
        this.loader = false; 
      })
      .catch((error) => {
        console.error('Error fetching random images:', error);
        this.loader = false; 
      });
  }

  login() {
    console.log(`login clicked`);
  }

  searchImages(event) {
    const query = this.searchQuery.trim();
    if (event.keyCode === 13 && query) {
      this.loader = true; 
      this.imageSearchService
        .searchImageByQuery(query)
        .then((images) => {
          this.images = images;
          this.loader = false; 
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          this.loader = false; 
        });
    }
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.images.length / this.itemsPerPage);
  }

  getDisplayedImages(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.images.slice(startIndex, endIndex);
  }
}
