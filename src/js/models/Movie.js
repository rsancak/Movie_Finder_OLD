import { apiKey, baseUrl } from '../config';

export class Movie {
  constructor(id) {
    this.id = id;
  }

  async getMovie() {
    const response = await fetch(`${baseUrl}/movie/${this.id}?api_key=${apiKey}`);
    this.data = await response.json();
  }
}
