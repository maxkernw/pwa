export default class GlobalEventService {

    constructor() {
        this.subscribers = []
        this.eventTypes = []
    }

    subscribe(observer) {
        this.subscribers.push(observer);
        this.setupListener(observer.event)
        return () => this.unsubscribe(observer);
    }

    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(obs => obs !== observer)
        for (let obs of this.subscribers) {
            this.eventTypes.includes(obs.event)
                ? true
                : window.removeEventListener(obs.event, this.eventCallback.bind(this));
        }
    }

    setupListener(event) {
        const events = this.eventTypes.includes(event)
        if (!events) {
            this.eventTypes.push(event);
            window.addEventListener(event, this.eventCallback.bind(this));
        }
    }

    eventCallback(e) {
        for (let item of this.subscribers) {
            if (item != null && item.event === e.type) {
                item.callback(e);
            }
        }
    }
}