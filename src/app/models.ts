export class Database {
    public source: string = "None"
    // public processes: Process[] = new Array()
    // public dataTypes: DataType[] = new Array()
    // public networks: Network[] = new Array()
    // public technologies: Technology[] = new Array()
    public graph: GraphItem[] = new Array()
    public structure = new DbConfig()
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
    component: string
    extra: any
    status = "Complete"
    start_date: Date
    finish_date: Date
    description: string
}

export class DbConfig {
    nodeTypes: Label[] = [
        {
            label: 'Component',
            value: 'component'
        }, {
            label: 'Process',
            value: 'process'
        }, {
            label: 'Requirement',
            value: 'requirement'
        }, {
            label: 'Capability',
            value: 'capability'
        }, {
            label: 'Technology',
            value: 'technology'
        }, {
            label: 'Library',
            value: 'library'
        }, {
            label: 'Intent',
            value: 'intent'
        }, {
            label: 'Data Type',
            value: 'datatype'
        }, {
            label: 'Intent',
            value: 'Intent'
        }, {
            label: 'Release',
            value: 'release'
        }, {
            label: 'Install',
            value: 'install'
        }, {
            label: 'Event',
            value: 'event'
        }
    ]

    edgeTypes: Label[] = [
        {
            label: 'Parent',
            value: 'parent'
        },
        {
            label: 'Depends On',
            value: 'depends'
        },
        {
            label: 'Association',
            value: 'association'
        },
        {
            label: 'Implements',
            value: 'implements'
        },
        {
            label: 'Satisfies',
            value: 'satisfies'
        },
        {
            label: 'Reads',
            value: 'reads'
        },
        {
            label: 'Writes',
            value: 'writes'
        },
        {
            label: 'Consumes',
            value: 'consumes'
        },
        {
            label: 'Handles',
            value: 'handles'
        },
        {
            label: 'Writes',
            value: 'writes'
        }
    ]

    validRelations: ValidRelation[] = [
        {
            sourceType: 'process',
            targetType: 'component',
            edgeType: 'parent'
        }
    ]

}

export class ProcessExtra {
    public component_name: string
    public executor_name: string
    public version: string
    public docker_base: string

    public cpu: number
    public ram: number
    public disk: number
    public gpu: number
    public instances: number
    public dfs_storage: number
    public archive_storage: number
}

export class Label {
    value: string
    label: string
}

export class ValidRelation {
    sourceType: string
    targetType: string
    edgeType: string
}