import axios from "axios"
import Q from 'q'

export async function get(url, data = null) {
    var deferred = Q.defer();
    //data sent in as plain JSON object for ease
    if (data) {
        deferred.resolve(await axios({
            method: "GET",
            headers: { 'content-type': 'application/json' },
            url: url,
            data: data
        }))
    } else {
        deferred.resolve(await axios({
            method: "GET",
            headers: { 'content-type': 'application/json' },
            url: url,
        }))
    }
    return await deferred.promise.inspect().value.data
}

export async function post(url, data = null) {
    var deferred = Q.defer();
    //data sent in as plain JSON object for ease
    if (data) {
        deferred.resolve(await axios({
            method: "POST",
            headers: { 'content-type': 'application/json' },
            url: url,
            data: data
        }))
    } else {
        deferred.resolve(await axios({
            method: "POST",
            headers: { 'content-type': 'application/json' },
            url: url,
        }))
    }
    return await deferred.promise.inspect().value.data
}
