const axios = require("axios")
const { RatelimitError, APIError, AuthError, RequestError } = require("./errors")
class RequestHandler {
    constructor(client) {
        this._client = client
    }

    async request(endpoint, query = {}, method, body, _attempts = 0) {
        return new Promise((resolve, reject) => {
            const options = {
                validateStatus: null,
                headers: {
                    Authorization: `Bearer ${this._client.token}`,
                    "Content-Type": "application/json",
                },
                baseURL: this._client.baseURL + this._client.version,
                url: endpoint,
                method: method,
                data: body,
                params: query,
                timeout: 15000,
            }

            if (this._client.debug) console.debug(`Sending request to ${options.url}\nMethod:\n  ${options.method}\nParams:\n  ${query}`)
            try {
                axios.request(options).then((res) => {
                    //  Increase the number of attempts
                    ++_attempts

                    switch (res.status) {
                        case 200:
                            if (this._client.debug) console.debug(`Request successful.\nResponse:\n  ${res.data}`)
                            resolve(res.data)
                            break
                        case 201:
                            if (this._client.debug) console.debug(`Request successful.\nResponse:\n  ${res.data}`)
                            resolve(res.data)
                            break
                        case 304:
                            if (this._client.debug) console.debug(`Request resulted in no modifications.\nResponse:\n  ${res.data}`)
                            resolve(res.data)
                            break
                        case 400:
                            if (this._client.debug) console.debug(`Request failed with Bad Request.\nResponse:\n  ${res.data}`)
                            reject(new APIError(res.data.message, res.data.code))
                            break
                        case 401:
                            if (this._client.debug) console.debug(`Request failed with Unauthorized.\nResponse:\n  ${res.data}`)
                            reject(new APIError(res.data.message, res.data.code))
                            break
                        case 403:
                            if (this._client.debug) console.debug(`Request failed with Forbidden.\nResponse:\n  ${res.data}`)
                            reject(new APIError(res.data.message, res.data.code))
                            break
                        case 429:
                            if (this._client.debug) console.debug(`Ratelimit reached.\nResponse:\n  ${res.data}`)
                            reject(new RatelimitError(res.data))
                            break
                        case 500:
                            if (this._client.debug) console.debug(`Internal server error.\nResponse:\n  ${res.data}`)
                            reject(new APIError(res.data))
                            break
                        default:
                            if (this._client.debug) console.debug(`Unknown error.\nResponse:\n  ${res.data}`)
                            reject(new Error(res.data))
                            break
                    }
                })
            } catch (err) {
                if (this._client.debug) console.debug(`Unknown error.\nResponse:\n  ${res.data}`)
                reject(new Error(res))
            }
        })
    }
}

module.exports = RequestHandler
