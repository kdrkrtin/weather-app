const $API = (url, data = false, method = 'GET') => {
    return new Promise( async (resolve, reject) => {
        const rootAPI = 'https://api.openweathermap.org';

        const options = {
            method
        }

        if (data && method === 'POST') {
            options.body = JSON.stringify(data);
        }

        const res = await fetch(rootAPI + url, options);
        const result = await res.json();

        resolve(result);
    }) 
}

const get = (url) => $API(url);

export { get };