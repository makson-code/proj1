import axios from "axios";

const newsApiInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: 'd15b8225d67d4fde8b38f8d2467d1227' 
  }
});

export const newsApi = {
  getEverything(params = {}) {
    return newsApiInstance.get('/everything', { params })
      .then(response => response.data);
  },
  getTopHeadlines(params = {}) {
    return newsApiInstance.get('/top-headlines', { params })
      .then(response => response.data);
  }
};