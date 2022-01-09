const RequestHandler = require("./RequestHandler")
const { Domain } = require("./structures")

class Phisherman {
    /**
     *
     * @constructs Phisherman
     * @description This is the main class that you initalize to perform all the requests to the API
     * @param {string} token - The token you use to authenticate to the API
     * @param {object} options - Additional options for the API handler
     * @param {boolean} [options.debug=false] - Controls whether debug mode is enabled for the library
     * @param {string} [options.baseURL="https://api.phisherman.gg/"] - The base URL for the API requests, defaults to api.phisherman.gg
     * @param {string} [options.version="v1"] - The version for the API requests, defaults v1
     */
    constructor(token, options = {}) {
        if (typeof token !== "string") throw new TypeError("The API token must be a string")
        if (typeof options !== "object") throw new TypeError("options must be an object")
        if (options.baseURL !== undefined && typeof options.baseURL !== "string") throw new TypeError("baseURL must be a string")
        if (options.baseURL !== undefined && !options.baseURL.endsWith("/")) throw new Error("baseURL must end with a /")
        if (options.version !== undefined && typeof options.version !== "string") throw new TypeError("version must be a string")
        if (options.debug !== undefined && typeof options.debug !== "boolean") throw new TypeError("options.debug must be a boolean")

        this.token = token
        this.debug = options.debug || false
        this.baseURL = options.baseURL || "https://api.phisherman.gg/"
        this.version = options.version || "v1"
        this.requestHandler = new RequestHandler(this)

        if (this.debug) console.debug("Phisherman.js initalized\n" + JSON.stringify(options, null, 2))
    }

    /**
     * @public
     * @async
     * @param {string} url The URL to check
     * @returns {boolean} Whether the URL is a phishing site
     */

    async checkDomain(url) {
        if (this.debug) console.debug(`Event: checkDomain\n  - URL: ${url}`)
        if (typeof url !== "string") throw new TypeError("url must be a string")
        const data = await this._request(`/domains/${url}`)
        return data
    }

    /**
     * @public
     * @async
     * @param {string} domain The domain to check
     * @returns {Domain}
     */

    async getDomainInfo(domain) {
        if (this.debug) console.debug(`Event: getDomainInfo\n  - URL: ${url}`)
        const data = await this._request(`/domains/info/${domain}`)

        console.log(data)
        let theDomain = new Domain(data, domain)
        console.log(theDomain)
        return theDomain
    }


    /**
     * Internal method to hit the API
     *
     * @private
     * @param {string} endpoint - The API endpoint to request
     * @param {string} [method="GET"] - The HTTP method to use (GET, PUT, PATCH etc.)
     * @param {object} [query={}] - Query parameters
     * @throws {RatelimitError}
     * @throws {APIError}
     * @returns {Promise<any>} The raw request data
     */
    _request(endpoint, query = {}, method = "GET", body = {}) {
        return this.requestHandler.request(endpoint, query, method, body)
    }
}

module.exports = Phisherman
