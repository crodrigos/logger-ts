import Logger from "../src"

describe('Logger tests', () => {
    it("warns", () => {
        Logger.Warn("This is a warning")
    })

    it("succedes", () => {
        Logger.Success("Success")
    })

    it("logs", () => {
        Logger
    })
})