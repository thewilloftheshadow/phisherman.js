export interface DomainDetails {
    phishTankId: string
    urlScanId: string
    websiteScreenshot: string
    ip_address: string
    asn: {
        asn: string
        asn_name: string
        route: string
    }
    registry: string
    country: {
        code: string
        name: string
    }
}

export interface APIDomain {
    status: string
    created: Date
    lastChecked: Date
    verifiedPhish: boolean
    classification: string
    firstSeen: Date
    lastSeen: Date
    targetedBrand: string
    phishCaught: number
    details: DomainDetails
}

interface APIResult {
    [url: string]: APIDomain
}

class Domain {
    status: string
    created: Date
    lastChecked: Date
    verifiedPhish: boolean
    classification: string
    firstSeen: Date
    lastSeen: Date
    targetedBrand: string
    phishCaught: number
    details: DomainDetails

    constructor(inputData: APIResult, url: string) {
        const data = inputData[url]
        this.status = data.status
        this.created = new Date(data.created)
        this.lastChecked = new Date(data.lastChecked)
        this.verifiedPhish = data.verifiedPhish
        this.classification = data.classification
        this.firstSeen = new Date(data.firstSeen)
        this.lastSeen = new Date(data.lastSeen)
        this.targetedBrand = data.targetedBrand
        this.phishCaught = data.phishCaught
        this.details = data.details
    }
}

export default Domain
