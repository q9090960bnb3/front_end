const eventCenter = (function () {
    /**
     * @type  {{[eventName: string]: Array<(param)=>void>}}
     */
    const subscribers = {};
    
    /**
     * @description: 
     * @param {string} eventName
     * @param {(param) => {}} callback
     * @return {*}
     */
    function subscribe(eventName, callback) {
        if (!subscribers[eventName]) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback);
    }

    /**
     * @description: 
     * @param {string} eventName
     * @param {*} data
     * @return {*}
     */
    function publish(eventName, data) {
        if (Array.isArray(subscribers[eventName])) {
            subscribers[eventName].forEach(callback => callback(data));
        }
    }

    function unsubscribe(eventName, callback) {
        if (Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = subscribers[eventName].filter(cb => cb !== callback);
        }
    }

    return {
        subscribe,
        publish,
        unsubscribe
    };
})();