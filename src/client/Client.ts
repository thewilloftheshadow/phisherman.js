import { Method } from "axios"
import Domain from "../structures/Domain"
import RequestHandler from "../util/RequestHandler"

type ClientOptions = {
    debug?: boolean
    baseUrl?: string
    version?: string
}

class Client {
    token: string
    options: ClientOptions
    requestHandler: RequestHandler

    constructor(token: string, options: ClientOptions) {
        this.token = token
        this.options = {
            debug: options.debug || false,
            baseUrl: options.baseUrl || "http://api.phisherman.gg/",
            version: options.version || "v1",
        }
        this.requestHandler = new RequestHandler(this)
    }

    /**
     * Fetch information about a domain from the Phisherman database
     *
     * @param domain - The domain you want to check
     * @returns The Domain object contains all the known information from the database about the domain you requested.
     *
     * @example
     * ```
     * client.getDomainInfo("suspicious.test.phisherman.gg")
     * ```
     */
    async getDomainInfo(domain: string) {
        this.debug(`Getting domain infor for ${domain}`)
        const data = await this.request(`/domains/info/${domain}`)
        return new Domain(data, domain)
    }

    /**
     * Check if a provided domain is listed as a phishing site in the database
     *
     * @remarks
     * Note that a return of false means that this domain is not listed in the database and not that the domain is safe.
     * There is always a small window where newly registered phishing domains may not yet have been identified.
     * Always exercise caution when dealing with suspected phishing domains.
     * If in doubt, perform additional verifications such as VirusTotal or URLScan.io scans.
     *
     * @param domain - The domain you want to check
     * @returns If true, the domain is phishing. If false, the domain may not registered in the database.
     */
    async checkDomain(domain: string) {
        this.debug(`Checking domain ${domain}`)
        const isPhish: boolean = await this.request(`/domains/${domain}`)
        return isPhish
    }

    /**
     * Report a successful find for a phishing domain to the Phisherman admins
     * @remarks
     * This is not required, however, it does help with analytics and tracking the use of phishing domains across Discord.
     *
     * @param domain - The domain you want to report
     * @param guildId - The Discord guild the phishing domain was reported from
     * @returns If true, the domain was reported successfully.
     */
    async reportPhish(domain: string, guildId?: string) {
        this.debug(`Reporting phishing for ${domain}`)
        const query: { guild?: string } = {}
        if (guildId) query.guild = guildId
        const data = await this.request(`/domains/${domain}`, query, "PUT")
        return data
    }

    /**
     * @internal
     */
    debug(message: string) {
        if (this.options.debug) {
            // eslint-disable-next-line no-console
            console.log(`[Phisherman.js] ${message}`)
        }
    }

    /**
     * @internal
     */
    request(endpoint: string, query = {}, method: Method = "GET", body = {}) {
        return this.requestHandler.request(endpoint, method, query, body)
    }
}

export default Client
