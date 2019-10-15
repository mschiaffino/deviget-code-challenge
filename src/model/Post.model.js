export default class Post {
  constructor(id, title, author, thumbnail) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._thumbnail = thumbnail;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get thumbnail() {
    return this._thumbnail;
  }
}
