# Depends

This project is a dependany tracking mechanism for software systems. The intents is that the database is distribtued similar to a package management system. Each contributing items provides its portion of the database in the form of a JSON file. 

The application will combine the files and provide tools to view the dependencies of the whole system. 

## Data Model

### Node Types

Component   - Top level component of the system. Traditionally called a CSCi. 
Process     - A sub-component, typically called a CSC or CSU. Processes are meant to capture the physical architecture not the logical
Endpoint    - A Function in a process (typically a REST Endpoint / Verb)
Technology  - A Technology that runs separate from a Process (e.g. Elastic Search, Apache Kafka, DCOS)
Library     - A third party libary that is used in the process or as an operating system depenendcy
Data Type   - A Data Structure or file that is written or read by processes. This includes files, kafka messages, etc.
Intent      - A intent that is handled or used by a process
Algorithm   - Algorithm called by the process
Version     - A release of a process
Event       - An activity or milestone

#### Component

Top level component of the system. Traditionally called a CSCi. 

Extra Fields


#### Process

A sub-component, typically called a CSC or CSU. Processes are meant to capture the physical architecture not the logical
Extra Fields
    "component_name": "Baselines",
    "executor_name": "marathon",
    "docker_base": "java",
    "cpu": 1,
    "ram": 1024,
    "disk": 0,
    "gpu": 0,
    "instances": 1,
    "dfs_storage": 0,
    "archive_storage": 0

#### Endpoint


### Edge Types

Dependency  - 
Parent      - 

##  Capabilities

 
### Analyze Dependencies Page
Provides a "Focus" on a few items and all the dependencies are then listed for those items to whatever depth specified. There are 2 lists of dependencies. The first list is the list of things that the focused items are dependent on and the second list is everything that is dependent on the focused items. 

**Features**
- Select one ore more items to be the focus
- Generate a ancestor list of dependencies
- Generate a child list of dependent items
- Filter the lists by type of dependency
- Export lists to Excel
- Export Depenency Report to PDF, Texttile (Redmine), markdown (Confluence)
- Include Dates of deliveries

## Todo List

- Collapse child dependencies into parent ones (e.g. Endpoints -> Processes -> Components)
- Better Sample Data
- Timeline Sorting
- Save a baseline, perform scenario modeling
- Hook to JIRA and get status from there
- Column chooser
- Look at different table widget
- Export to Excel / CSV
- PDF Export
- Color code by scheduling status
- Color code by end date
- Filter by status / end date

### Design Questions


## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `npm run ghpages` to build the project for Github Pages. The build artifacts are stored in the /docs folder and available at https://wtiger001.github.io/depends