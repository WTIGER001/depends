export class Database {
    public source: string = "None"
    public processes: Process[] = new Array()
    public dataTypes: DataType[] = new Array()
    public networks: Network[] = new Array()
    public technologies: Technology[] = new Array()
    public graph: GraphItem[] = new Array()
}

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


export class GraphItem {
    group: string = 'nodes'
    selected: false // whether the element is selected (default false)
    selectable: true // whether the selection state is mutable (default true)
    locked: false // when locked a node's position is immutable (default false)
    grabbable: true // whether the node can be grabbed and moved by the user
    classes: string = "" // a space separated list of class names that the element has
    data: Data = new Data()
}

export class Data {
    id: string // mandatory (string or number) id for each element, assigned automatically on undefined
    label: string //optional description
    parent: string // indicates the compound node parent id; not defined => no parent
    source: string // the source node id (edge comes from this node)
    target: string  // the target node id (edge goes to this node)
    from: string
    to: string
    type: string
    degree: number
    version: string

}