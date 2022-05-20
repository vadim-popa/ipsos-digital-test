import axios from 'axios';

export function FETCH_LIST_DATA(context) {
  const config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        context.commit('SET_LIST_DATA', response?.data);
        return resolve(context.state.listData);
      })
      .catch((error) => reject(error));
  });
}
