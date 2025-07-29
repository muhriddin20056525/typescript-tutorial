"use strict";
// export interface DocumentService {
//   readDocument(): void;
// }
class DataService {
    fetchData(id) {
        console.log(`Fetching data for ID: ${id}`);
        return `Data for ID ${id}`;
    }
}
class CachedDataProxy {
    constructor() {
        this.cache = new Map();
        this.dataService = new DataService();
    }
    fetchData(id) {
        if (this.cache.has(id)) {
            console.log(`Cache hit for id: ${id}`);
            return this.cache.get(id);
        }
        const data = this.dataService.fetchData(id);
        this.cache.set(id, data);
        return data;
    }
}
const proxy = new CachedDataProxy();
console.log(proxy.fetchData(1));
console.log(proxy.fetchData(1));
console.log(proxy.fetchData(2));
console.log(proxy.fetchData(1));
