
export class Process {
    public source: string = ""
    public process_name: string = ""
    public component_name: string
    public executor_name: string
    public version: string
    public docker_base: string
    public resources: Resources = new Resources()
    public platform_technologies_used: Technology[] = new Array()
    public third_party_libraries: Library[] = new Array()
    public data_written: DataTypeRef[] = new Array()
    public data_consumed: DataTypeRef[] = new Array()
    public intents_handled: Intent[] = new Array()
    public intents_used: Intent[] = new Array()
    public service_calls: ServiceCall[] = new Array()
    public service_endpoints: ServiceEndpoint[] = new Array()
    public algorithms_invoked: AlgInvoke[] = new Array()
}

export class Resources {
    public cpu: number
    public ram: number
    public disk: number
    public gpu: number
    public instances: number
    public dfs_storage: number
    public archive_storage: number
}

export class Technology {
    public technology: string
    public version: string
}

export class Library {
    public library: string
    public version: string
}

export class DataTypeRef {
    public data_name: string
    public version: string
}

export class Intent {
    public intent_name: string
    public version: string
}

export class ServiceCall {
    public process_name: string = ""
    public endpoint: string
    public version: string
}

export class ServiceEndpoint {
    public endpoint: string
}

export class AlgInvoke {
    public alg_name: string
    public version: string
}

export class DataType {
    public source: string = ""
    public data_name: string
    public version: string
}

export class ProcessVersion {
    public source: string = ""
    public process_name: string
    public version: string
}

export class Network {
    public source: string = ""
    public network_name: String
    public platform_technologies: Technology[] = new Array()
    public installed_processes: ProcessVersion[] = new Array()
}

export class Converter {
    // public addFile(file: File, callback: () => void) {
    //   let local = this.localStorageService
    //   let db = this.database.getValue()
    //   let r = new FileReader()
    //   r.onload = function (e) {
    //     console.log(r.result)
    //     let obj = <Database>JSON.parse(r.result);
    //     let source = file.name.replace(".json", "")
    //     if (obj.processes) {
    //       obj.processes.forEach(p => {
    //         p.source = source
    //         db.processes.push(p)
    //       });
    //     }
    //     if (obj.dataTypes) {
    //       obj.dataTypes.forEach(p => {
    //         p.source = source
    //         db.dataTypes.push(p)
    //       });
    //     }
    //     if (obj.networks) {
    //       obj.networks.forEach(p => {
    //         p.source = source
    //         db.networks.push(p)
    //       });
    //     }
    //     // local.remove("database")
    //     DataService.generateGraph(db)
    //     local.set("database", JSON.stringify(db))
    //     console.log("Wrote to Local Storage");

    //     callback()
    //   };
    //   r.readAsText(file)
    // }

    // public static generateGraph(db: Database) {
    //   let nodes = new Map<string, GraphItem>()

    //   db.processes.forEach(p => {
    //     DataService.addTo(p, nodes)
    //   })
    //   let items = new Array<GraphItem>()
    //   nodes.forEach((value: GraphItem, key: string) => {

    //     if (value.data.type == undefined) {
    //       console.log("Something is BAD " + JSON.stringify(value));
    //     }

    //     if ((value.group === "edges" && value.data.source && value.data.target) || value.group == 'nodes') {
    //       items.push(value)
    //     } else {
    //       console.log("Something is BAD " + JSON.stringify(value));
    //     }
    //   });
    //   db.graph = items
    // }

    // private static addTo(p: Process, nodes: Map<string, GraphItem>) {
    //   // Component
    //   // if (!nodes.has(p.component_name)) {
    //   //   let n = DataService.add(p.component_name, nodes)
    //   //   n.data.type = "Component"
    //   //   n.data.version = "N/A"
    //   // }

    //   // Generate the parent node
    //   let n = DataService.add(p.process_name, nodes)
    //   n.data.parent = DataService.valid(p.component_name)
    //   n.data.type = "Process"
    //   n.data.component = p.component_name
    //   n.data.version = p.version

    //   // Create the process extra
    //   let extra = new ProcessExtra()
    //   extra.component_name = p.component_name
    //   extra.docker_base = p.docker_base
    //   extra.executor_name = p.executor_name
    //   extra.resources = p.resources
    //   n.data.extra = extra

    //   // Technologies
    //   p.platform_technologies_used.forEach(t => {
    //     if (!nodes.has(DataService.valid(t.technology))) {
    //       let n = DataService.add(t.technology, nodes)
    //       n.data.type = "Technology"
    //       n.data.version = t.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.source = DataService.valid(p.process_name)
    //     e.data.target = DataService.valid(t.technology)
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.id = DataService.valid(p.process_name + "_" + t.technology)
    //     e.data.label = t.version
    //     e.data.type = "Technology"
    //     // e.type = "Technology"
    //     nodes.set(e.data.id, e)
    //   })

    //   // Libraries
    //   p.third_party_libraries.forEach(l => {
    //     if (!nodes.has(DataService.valid(l.library))) {
    //       let n = DataService.add(l.library, nodes)
    //       n.data.type = "Library"
    //       n.data.version = l.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.source = DataService.valid(p.process_name)
    //     e.data.target = DataService.valid(l.library)
    //     e.data.id = DataService.valid(p.process_name + "_" + l.library)
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.label = l.version
    //     e.data.type = "Library"
    //     nodes.set(e.data.id, e)
    //   })

    //   // Data Written
    //   p.data_consumed.forEach(d => {
    //     if (!nodes.has(DataService.valid(d.data_name))) {
    //       let n = DataService.add(d.data_name, nodes)
    //       n.data.type = "Data Type"
    //       n.data.version = d.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.source = DataService.valid(p.process_name)
    //     e.data.target = DataService.valid(d.data_name)
    //     e.data.id = DataService.valid(p.process_name + "_" + d.data_name)
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.label = d.version
    //     e.data.type = "Data Consumed"
    //     nodes.set(e.data.id, e)
    //   })

    //   // Data Consumed
    //   p.data_written.forEach(d => {
    //     if (!nodes.has(DataService.valid(d.data_name))) {
    //       let n = DataService.add(d.data_name, nodes)
    //       n.data.type = "Data Type"
    //       n.data.version = d.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.target = DataService.valid(p.process_name)
    //     e.data.source = DataService.valid(d.data_name)
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.id = DataService.valid(p.process_name + "_" + d.data_name)
    //     e.data.label = d.version
    //     e.data.type = "Data Written"
    //     nodes.set(e.data.id, e)
    //   })

    //   // Intents 
    //   p.intents_used.forEach(d => {
    //     if (!nodes.has(DataService.valid(d.intent_name))) {
    //       let n = DataService.add(d.intent_name, nodes)
    //       n.data.type = "Intent"
    //       n.data.version = d.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.source = DataService.valid(p.process_name)
    //     e.data.target = DataService.valid(d.intent_name)
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.id = DataService.valid(p.process_name + "_" + d.intent_name)
    //     e.data.label = d.version
    //     e.data.type = "Intent Used"
    //     nodes.set(e.data.id, e)
    //   })

    //   // Intents
    //   p.intents_handled.forEach(d => {
    //     if (!nodes.has(DataService.valid(d.intent_name))) {
    //       let n = DataService.add(d.intent_name, nodes)
    //       n.data.type = "Intent"
    //       n.data.version = d.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.target = DataService.valid(p.process_name)
    //     e.data.source = DataService.valid(d.intent_name)
    //     e.data.id = DataService.valid(p.process_name + "_" + d.intent_name)
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.label = d.version
    //     e.data.type = "Intent Handled"
    //     nodes.set(e.data.id, e)
    //   })

    //   // Service Calls 
    //   p.service_calls.forEach(d => {
    //     let id = DataService.valid(d.process_name + "_" + d.endpoint)
    //     if (!nodes.has(id)) {
    //       let n = DataService.add(id, nodes)
    //       n.data.type = "Service Call"
    //       n.data.version = d.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.source = DataService.valid(p.process_name)
    //     e.data.target = id
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.id = DataService.valid(p.process_name + "_" + id)
    //     e.data.label = d.version
    //     e.data.type = "Service Called"
    //     nodes.set(e.data.id, e)

    //     // Service Calls are also
    //     let n2 = DataService.add(d.process_name, nodes)
    //     n2.data.type = "Process"
    //     n2.data.version = d.version

    //     let e1 = new GraphItem()
    //     e1.group = 'edges'
    //     e1.data.source = DataService.valid(p.process_name)
    //     e1.data.target = DataService.valid(d.process_name)
    //     e1.data.from = e1.data.source
    //     e1.data.to = e1.data.target
    //     e1.data.id = DataService.valid(p.process_name + "_" + d.process_name)
    //     e1.data.label = d.version
    //     e1.data.type = "Process Dependency"
    //     nodes.set(e1.data.id, e1)
    //   })

    //   // Endpoints
    //   p.service_endpoints.forEach(d => {
    //     let id = DataService.valid(p.process_name + "_" + d.endpoint)
    //     if (!nodes.has(id)) {
    //       let n = DataService.add(id, nodes)
    //       n.data.type = "Endpoint"
    //       n.data.version = p.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.source = DataService.valid(p.process_name)
    //     e.data.target = id
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.id = DataService.valid(p.process_name + "_" + id)
    //     e.data.label = p.version
    //     e.data.type = "Endpoint"
    //     nodes.set(e.data.id, e)
    //   })

    //   // Algorithms
    //   p.algorithms_invoked.forEach(d => {
    //     if (!nodes.has(DataService.valid(d.alg_name))) {
    //       let n = DataService.add(d.alg_name, nodes)
    //       n.data.type = "Algorithm"
    //       n.data.version = d.version
    //     }
    //     let e = new GraphItem()
    //     e.group = 'edges'
    //     e.data.source = DataService.valid(p.process_name)
    //     e.data.target = DataService.valid(d.alg_name)
    //     e.data.from = e.data.source
    //     e.data.to = e.data.target
    //     e.data.id = DataService.valid(p.process_name + "_" + d.alg_name)
    //     e.data.label = p.version
    //     e.data.type = "Algorithm Invoked"
    //     nodes.set(e.data.id, e)
    //   })

    // }

    // private static add(id: string, nodes: Map<string, GraphItem>): GraphItem {
    //   let realId = DataService.valid(id)
    //   if (!nodes.has(realId)) {
    //     let n = new GraphItem()
    //     n.data.id = realId
    //     n.data.label = id
    //     nodes.set(n.data.id, n)
    //     return n
    //   } else {
    //     return nodes.get(realId)
    //   }
    // }
}