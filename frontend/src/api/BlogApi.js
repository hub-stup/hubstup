import delay from './delay';

const posts = [
  {
    id: '1',
    title: 'How to get really good at programming',
    author: 'hubstup',
    date: 'October, 2016',
    image: 'blogpost2.png',
    video: '',
    tags: ["IT"]
  },
  {
    id: '2',
    title: 'Get healthy riding a bicycle everyday',
    author: 'hubstup',
    date: 'October, 2016',
    image: 'blogpost3.png',
    video: '',
    tags: ["IT"]
  }
];

class BlogApi {

  static getAll() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }

  static get(id) {
    return null;
  }

  static save(post) {
    return null;
  }

  static delete(post) {
    return null;
  }

}

export default BlogApi;

