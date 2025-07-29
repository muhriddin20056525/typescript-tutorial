// export interface DocumentService {
//   readDocument(): void;
// }

// class RealDocument implements DocumentService {
//   readDocument(): void {
//     console.log(`Reading secure document...`);
//   }
// }

// class DocumentProxy implements DocumentProxy {
//   private realDocument: RealDocument;

//   constructor(private userRole: string) {
//     this.realDocument = new RealDocument();
//   }

//   readDocument(): void {
//     if (this.userRole === "admin") {
//       console.log("Access granted to read document");
//       this.realDocument.readDocument();
//     } else {
//       console.log("Access denied to read document");
//     }
//   }
// }

// const admin = new DocumentProxy("admin");
// admin.readDocument();

// const user = new DocumentProxy("user");
// user.readDocument();

interface DataService {
  fetchData(id: number): string;
}

class DataService implements DataService {
  fetchData(id: number): string {
    console.log(`Fetching data for ID: ${id}`);
    return `Data for ID ${id}`;
  }
}

class CachedDataProxy implements DataService {
  private dataService: DataService;
  private cache: Map<number, string> = new Map();

  constructor() {
    this.dataService = new DataService();
  }

  fetchData(id: number): string {
    if (this.cache.has(id)) {
      console.log(`Cache hit for id: ${id}`);
      return this.cache.get(id) as string;
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
