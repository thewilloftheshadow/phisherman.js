declare module "Phisherman.js" {
    export const version: string

    export class Phisherman {
        public token: string
        public debug: boolean
        public baseURL: string
        public version: string
        public requestHandler: RequestHandler
        public constructor(token: string, options: PhishermanOptions)
        public getDomain(url: string): boolean
        private _request(endpoint: string, method?: string, query: any): Promise<any>
    }

    export class APIError extends Error {
        public constructor(response: any)
        public name: string
        public status: number
        public message: string
    }

    export class RatelimitError extends Error {
        public constructor(response: any)
        public name: string
        public status: number
        public remaining: number
        public message: string
    }

    export class RequestHandler {
        public constructor(public _client: Phisherman)
        private request(endpoint: string, method: string, query?: any, _attempts?: number): Promise<any>
    }

    export interface PhishermanOptions {
        token: string
        debug?: boolean
        baseURL?: string
        version?: string
    }
}
