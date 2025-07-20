"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// class Singleton {
//   private static instance: Singleton;
//   private constructor() {
//     console.log("Singleton instace created");
//   }
//   static getInstance(): Singleton {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }
//   public someMethod(): void {
//     console.log("Method called on singleton instance");
//   }
// }
// const s1 = Singleton.getInstance();
// const s2 = Singleton.getInstance();
// console.log(s1);
// console.log(s2);
class MongoConnection {
    constructor() {
        this.db = null;
        this.client = new mongodb_1.MongoClient("mongodb+srv://muhriddindavlatov89:nqkMVpTrLPrrWNeV@cluster0.nnjstnl.mongodb.net/netflix");
    }
    static getIntance() {
        if (!this.instance) {
            this.instance = new MongoConnection();
        }
        return this.instance;
    }
    async connect() {
        if (this.db) {
            console.log(`Already connected to database`);
            return this.db;
        }
        console.log(`Connecting to database...`);
        await this.client.connect();
        this.db = this.client.db("mydatabase");
        console.log(`Connected to the database`);
        return this.db;
    }
}
async function bootstrap() {
    const mongo1 = MongoConnection.getIntance();
    const db1 = await mongo1.connect();
    const mongo2 = MongoConnection.getIntance();
    const db2 = await mongo2.connect();
    if (db1 === db2) {
        console.log("Both instance are the same");
    }
    else {
        console.log("Instances are different");
    }
}
bootstrap();
