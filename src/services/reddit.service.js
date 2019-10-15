import responseMock from '../mocks/postsResponseMock.json';
import Post from '../model/Post.model';

function fetchPosts() {
  let posts = responseMock.data.children.map(toPostModel);

  return Promise.resolve(posts);
}

function toPostModel({ data }) {
  return new Post(
    data.id,
    data.title,
    data.author,
    data.thumbnail,
    data.num_comments,
    data.created_utc,
    data.url
  );
}

export default {
  fetchPosts
};
