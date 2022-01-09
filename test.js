const expect = require("expect.js")

require("dotenv").config()
const { Phisherman } = require("./src")
const { Domain } = require("./src/structures")
const phish = new Phisherman(process.env.PHISHERMAN_API_KEY)

describe("checkDomain", () => {
    it(`should return false for a safe domain`, async () => {
        let value = await phish.checkDomain("phisherman.gg")
        expect(value).to.be(false)
    }).timeout(15000)

    it(`should return true for a suspicious domain`, async () => {
        let value = await phish.checkDomain("suspicious.test.phisherman.gg")
        expect(value).to.be(true)
    }).timeout(15000)

    it(`should return false for a non-domain`, async () => {
        let value = await phish.checkDomain("0237302570")
        expect(value).to.be(false)
    }).timeout(15000)
})

describe("getDomainInfo", async () => {
    let value = await phish.getDomainInfo("suspicious.test.phisherman.gg")
    it(`should return a Domain`, async () => {
        expect(value).to.be.a(Domain)
    }).timeout(15000)
    it(`should have a status`, async () => {
        expect(value.status).to.be.a("string")
    }).timeout(15000)
})
