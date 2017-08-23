export class Database {
    public processes: Process[] = new Array()
    public dataTypes: DataType[] = new Array()
    public networks: Network[] = new Array()
    public technologies: Technology[] = new Array()
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
    public algorithms_invoked: Algorithm[] = new Array()
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

export class Aglorithm {
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