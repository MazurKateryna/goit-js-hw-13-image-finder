export default {
  page: 1,
  searchQuery: '',
  apiKey: '18874151-a59734316416ca9832deb4716',
  async getImages() {
    const result = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    );
    this.page += 1;
    return result.data.hits;
  },
  resetPage() {
    this.page = 1;
  },
  incrPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};