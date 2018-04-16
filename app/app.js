import GlobalEventService from './globalEventListener'
import HttpService from './service/httpService'
import awd from './header/header';
import userDetail from './user/userdetail';

const main = document.querySelector('main');
const eventService = new GlobalEventService();
const http = new HttpService("https://api.github.com", null)
const defaultUser = "maxkernw";

const clickEvent = null;

window.addEventListener('load', async e => {
    console.log("loadedasaa");
    main.innerHTML = awd();
    
    setupEventListener();
    let user = await getUser();
    main.innerHTML = await userDetail(user);
    var event = new Event("fetch");
    document.dispatchEvent(event);
})
const ev = (e) => console.log("awdaw"); 

const setupEventListener = () => {
    const click = {event: 'fetch', callback: ev}
    eventService.subscribe(click);
}

const getUser = () => http.get(`users/${defaultUser}`)

