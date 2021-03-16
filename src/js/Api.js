export default class API {
  constructor(url) {
    this.url = url;
    this.contentTypeHeader = { 'Content-Type': 'application/json' };
  }

  load() {
    return fetch(`${this.url}sse`, {
      method: 'GET',
      headers: this.contentTypeHeader,
    });
  }

  add(user) {
    return fetch(this.url, {
      body: JSON.stringify(user),
      method: 'POST',
      headers: this.contentTypeHeader,
    });
  }

  remove(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  }
}
