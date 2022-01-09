class Domain {
    /**
     *
     * @constructs Domain
     * @description A Domain fetched from the API, and the information about it
     * @property {string} url The URL of the domain
     * @property {boolean} status The status of the website
     * @property {boolean} verifiedPhish Whether this domain is verified as a phishing website
     * @property {Date} created The timestamp (in UTC) when this was added to the Phisherman.gg database
     * @property {string} targetedBrand What brand or company this phish is aimed at
     * @property {number} phishCaught The number of times this phish has been reported back to Phisherman as being caught
     * @property {Date} [firstSeen] The timestamp (in UTC) when this domain was first reported as seen
     * @property {Date} [lastSeen] The timestamp (in UTC) when this domain was last reported as seen
     * @property {Date} [lastChecked] The timestamp (in UTC) when this domain was last checked as being online
     * @property {number} [phishTankId] The PhishTank ID for this domain, if applicable
     * @property {string} [urlScanId] The URLScan.io UUID for this domain, if applicable
     * @property {string} [websiteScreenshot] URL to a screenshot of this website, provided by either PhishTank or URLScan.io
     * @property {string} [ipAddress] The IP address of this website
     * @property {string} [asn] The ASN (Autonomous System Numbers) for this domain
     * @property {string} [asnName] The human readable name for this ASN (Autonomous System Number)
     * @property {string} [route] The CIDR Block for this website
     * @property {string} [registry] The regional internet registry for this domain
     * @property {string} [country] The country this domain is hosted in
     */
    constructor(inputData, url) {
        const data = inputData[url]
        this.url = url
        this.status = data.status
        this.lastChecked = data.lastChecked
        this.verifiedPhish = data.verifiedPhish
        this.created = data.created
        this.firstSeen = data.firstSeen
        this.lastSeen = data.lastSeen
        this.targetedBrand = data.targetedBrand
        this.phishCaught = data.phishCaught
        this.phishTankId = data.phishTankId
        this.urlScanId = data.urlScanId
        this.websiteScreenshot = data.websiteScreenshot
        this.ipAddress = data.ip_address
        this.asn = data.asn
        this.asnName = data.asn_name
        this.route = data.route
        this.registry = data.registry
        this.country = data.country

        /**
         * @private
         * @description Raw data from the API
         * @type {object}
         */
        Object.defineProperty(this, "rawData", { value: data })
    }
}

module.exports = Domain
