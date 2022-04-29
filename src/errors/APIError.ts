import { AxiosResponse } from "axios"

class APIError extends Error {
    status: number

    constructor(response: AxiosResponse) {
        super()
        this.name = this.constructor.name
        this.status = response.status
        this.message = response.data ? response.data.error : undefined
    }
}

export default APIError
