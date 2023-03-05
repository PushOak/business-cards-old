import axios from 'axios';

export default function useAxios() {
  axios.interceptors.request.use((data)=> {
    console.log('this log came from interceptor request');
    return Promise.resolve(data);
  }, null);

  axios.interceptors.response.use((data) => {
    console.log('This log came from interceptor response');
    return Promise.resolve(data);
  }, null);

}
