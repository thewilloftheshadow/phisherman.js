import axios, { AxiosRequestConfig, Method } from "axios"

import APIError from "../errors/APIError"
import RatelimitError from "../errors/RatelimitError"

import Client from "../client/Client"

class RequestHandler {
    client: Client

    constructor(client: Client) {
        this.client = client
    }

    /**
     *
     * @param endpoint - The endpoint to fetch
     * @param method - The HTTP method to use
     * @param query - Any query strings to add
     * @param body - The HTTP body to send
     * @returns The response from the endpoint
     */
    async request(endpoint: string, method: Method, query: unknown = {}, body: unknown = {}) {
        const options: AxiosRequestConfig = {
            validateStatus: null,
            headers: {
                "Content-Type": "application/json",
            },
            baseURL: `${this.client.options.baseUrl}/${this.client.options.version}`,
            url: endpoint,
            method,
            data: body,
            params: query,
            timeout: 10000,
        }

        const res = await axios.request(options).catch((error) => {
            throw new Error(error)
        })

        if (res.status === 429) {
            throw new RatelimitError(res)
        } else if (res.status >= 400) {
            throw new APIError(res)
        } else {
            return res.data
        }
    }
}

export default RequestHandler
