export default class Post {
  constructor(id, title, author, thumbnail, commentsQuantity, creationDate) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._thumbnail = thumbnail;
    this._commentsQuantity = commentsQuantity;
    this._creationDate = new Date(creationDate * 1000);
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

  get commentsQuantity() {
    return this._commentsQuantity;
  }

  get creationDate() {
    return this._creationDate;
  }
}
