export default class API {
  constructor(url) {
    this.url = url;
    this.contentTypeHeader = { 'Content-Type': 'application/json' };
  }

  async load() {
    const response = await fetch(`${this.url}users`, {
      method: 'GET',
      headers: this.contentTypeHeader,
    });

    return response;
  }

  async add(user) {
    const response = await fetch(`${this.url}?method=POST`, {
      body: JSON.stringify(user),
      method: 'POST',
      headers: this.contentTypeHeader,
    });

    return response;
  }

  async remove(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });

    return response;
  }
}
