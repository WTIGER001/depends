export class Database {
  public source: string = "None";
  // public processes: Process[] = new Array()
  // public dataTypes: DataType[] = new Array()
  // public networks: Network[] = new Array()
  // public technologies: Technology[] = new Array()
  public graph: GraphItem[] = new Array();
  public structure = new DbConfig();
}

export class GraphItem {
  group: string = "nodes";
  selected: false; // whether the element is selected (default false)
  selectable: true; // whether the selection state is mutable (default true)
  locked: false; // when locked a node's position is immutable (default false)
  grabbable: true; // whether the node can be grabbed and moved by the user
  classes: string = ""; // a space separated list of class names that the element has
  data: Data = new Data();
}

export class Data {
  id: string; // mandatory (string or number) id for each element, assigned automatically on undefined
  label: string; //optional description
  parent: string; // indicates the compound node parent id; not defined => no parent
  source: string; // the source node id (edge comes from this node)
  target: string; // the target node id (edge goes to this node)
  from: string;
  to: string;
  type: string;
  degree: number;
  version: string;
  component: string;
  extra: any;
  status = "Complete";
  start_date: Date;
  finish_date: Date;
  description: string;
}

export class DbConfig {
  nodeTypes: NodeType[] = [
    {
      label: "Component",
      value: "component",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Process",
      value: "process",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Requirement",
      value: "requirement",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Capability",
      value: "capability",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Feature",
      value: "feature",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Thread",
      value: "thread",
      hasDate: true,
      dateType: DateType.Marker
    },
    {
      label: "Technology",
      value: "technology",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Library",
      value: "library",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Environment",
      value: "environment",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Data Type",
      value: "datatype",
      hasDate: false,
      dateType: DateType.None
    },
    {
      label: "Release",
      value: "release",
      hasDate: true,
      dateType: DateType.DateRange
    },
    {
      label: "Sprint",
      value: "Sprint",
      hasDate: true,
      dateType: DateType.DateRange
    },
    {
      label: "Event",
      value: "event",
      hasDate: true,
      dateType: DateType.Marker
    }
  ];

  edgeTypes: EdgeType[] = [
    {
      label: "Parent",
      value: "parent"
    },
    {
      label: "Depends On",
      value: "depends"
    },
    {
      label: "Association",
      value: "association"
    },
    {
      label: "Implements",
      value: "implements"
    },
    {
      label: "Satisfies",
      value: "satisfies"
    },
    {
      label: "Reads",
      value: "reads"
    },
    {
      label: "Writes",
      value: "writes"
    },
    {
      label: "Consumes",
      value: "consumes"
    },
    {
      label: "Handles",
      value: "handles"
    },
    {
      label: "Writes",
      value: "writes"
    }
  ];

  validRelations: ValidRelation[] = [
    {
      sourceType: "process",
      targetType: "component",
      edgeType: "parent"
    }
  ];
}

export class ProcessExtra {
  public component_name: string;
  public executor_name: string;
  public version: string;
  public docker_base: string;

  public cpu: number;
  public ram: number;
  public disk: number;
  public gpu: number;
  public instances: number;
  public dfs_storage: number;
  public archive_storage: number;
}

export enum DateType {
  None,
  DateRange,
  Milestone,
  Marker
}

export class NodeType {
  value: string;
  label: string;
  hasDate?: boolean = false;
  dateType?: DateType = DateType.None;
}

export class EdgeType {
  value: string;
  label: string;
}

export class ValidRelation {
  sourceType: string;
  targetType: string;
  edgeType: string;
}
