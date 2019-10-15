import responseMock from '../mocks/postsResponseMock.json';

function fetchPosts() {
  return Promise.resolve(responseMock);
}

export default {
  fetchPosts
};
