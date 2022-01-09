declare module "Phisherman.js" {
    export const version: string

    export class Phisherman {
        public token: string
        public debug: boolean
        public baseURL: string
        public version: string
        public requestHandler: RequestHandler
        public constructor(token: string, options: PhishermanOptions)
        public checkDomain(url: string): boolean
        private _request(endpoint: string, method?: string, query: any): Promise<any>
    }

    export class Domain {
        public constructor(inputData: Object, url: string)
        public url: string
        public status: boolean
        public verifiedPhish: boolean
        public created: Date
        public targetedBrand: string
        public phishCaught: number
        public firstSeen: Date
        public lastSeen: Date
        public lastChecked: Date
        public phishTankId: number
        public urlScanId: string
        public websiteScreenshot: string
        public ipAddress: string
        public asn: string
        public asnName: string
        public route: string
        public registry: string
        public country: string
        private readonly rawData: Object
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
