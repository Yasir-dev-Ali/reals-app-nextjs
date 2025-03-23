import { Connection } from "mongoose"

declare global {
    namespace NodeJS {
        interface Global {
            db: Connection,
            port: number,
            host: string
        }
    }
}