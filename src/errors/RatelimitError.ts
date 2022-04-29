import { AxiosResponse } from "axios"
import ms from "ms"

class RatelimitError extends Error {
    status: number
    remaining: number

    constructor(response: AxiosResponse) {
        super()
        this.name = this.constructor.name
        this.status = response.status
        this.remaining = response.data["Ratelimit-Remaining"]
        this.message = `You are currently ratelimited! Try again in ${ms(this.remaining)}`
    }
}

export default RatelimitError
