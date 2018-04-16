import GlobalEventService from './service/globalEventService'
import HttpService from './service/httpService'
import { userDetailComponent } from './components/userDetailComponent';
import { dispatch } from './service/dispatchService'

const main = document.querySelector('main');
const http = new HttpService("https://api.github.com", null)
const defaultUser = "elm";

let fetchUnsubscribe = null;
let updateUnsubscribe = null;
let onChangeUnsubscribe = null;

const setup = () => {
    setupEventListener();
    dispatch('fetch', defaultUser)
}

const get = (query) => http.get(`users/${query.detail}`)
const render = (data) => main.innerHTML = userDetailComponent(data.detail);
const query = ($event) => $event.keyCode === 13 && $event.target.id === "query" ? dispatch('fetch', $event.target.value) : null;

const setupEventListener = () => {
    const eventService = new GlobalEventService();

    const update = { event: 'update', callback: render };
    const fetch = { event: 'fetch', callback: get };
    const onChange = { event: 'keyup', callback: query };

    fetchUnsubscribe = eventService.subscribe(fetch);
    updateUnsubscribe = eventService.subscribe(update);
    onChangeUnsubscribe = eventService.subscribe(onChange)
}

window.addEventListener('load', setup)
