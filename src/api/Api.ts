class Api {
  private _url: string;
  constructor(urlSettings: string) {
    this._url = urlSettings;
  }

  _getResponseData(res: Response) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  async getArticle() {
    const res = await fetch(this._url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this._getResponseData(res);
  }

  async getPost(id: string) {
    const res = await fetch(`${this._url}${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this._getResponseData(res);
  }
};

export const api = new Api('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
