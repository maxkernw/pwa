import getOrAdd from './cacheService';
import { dispatch } from './dispatchService'

export default class HttpService {

    constructor(endpoint, apiKey = null) {
        this.endpoint = endpoint;
        this.apiKey = apiKey;
    }

    async get(path, useCache = true) {
        if (useCache) {
            getOrAdd(path, 
                () => fetch(`${this.endpoint}/${path}`), 
                (data) => dispatch('update', data))
        }
        else {
            const resp = await fetch(`${this.endpoint}/${path}`);
            const json = await resp.json();
            dispatch('update', data);
        }
    }
}