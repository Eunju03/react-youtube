import axios from 'axios';

class Youtube {
  constructor(httpClinet) {
    this.youtube = httpClinet;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      }
    });
    return response.data.items;
    // const response = await fetch(
    //   `/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items;
  }

  async search(query) {
    
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();

    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        type: 'video',
        q: query,
      }
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;