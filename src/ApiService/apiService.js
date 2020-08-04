import {baseUrl} from './constants';

export async function doLogin(formData) {
    try {
        let feeds = await fetch(`${baseUrl}login`, {
            method: 'post',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'x-api-key': '829839283923'
            }
        });
        let result = await feeds.json();
        feeds = null;
        return result;
    } catch (e) {
        console.warn(e.message)
    }
}

