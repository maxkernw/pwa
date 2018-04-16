export default class HttpService {

    constructor(endpoint, apiKey) {
        this.endpoint = endpoint;
        this.apiKey = apiKey;
    }

    async get(path) {
        const localData = sessionStorage.getItem(path)
        if (!localData) {
            const response = await fetch(`${this.endpoint}/${path}`)
            const json = await response.json();
            sessionStorage.setItem(path, JSON.stringify(json));
            return json;
        }
        return JSON.parse(localData);
    }
}