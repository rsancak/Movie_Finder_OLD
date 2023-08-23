import { apiKey, baseUrl } from '../config';

export default class Search {
  constructor(keyword) {
    this.keyword = keyword;
  }

  async getResults() {
    const response = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&page=1&query=${this.keyword}`);
    this.data = await response.json();
  }
}
