# Depends

This project is a dependany tracking mechanism for software systems. The intents is that the database is distribtued similar to a package management system. Each contributing items provides its portion of the database in the form of a JSON file. 

The application will combine the files and provide tools to view the dependencies of the whole system. 

## Data Model

> *I am not real happy with the data model and I think it needs to be more generic but still capture the same data to better support the network analysis*

**Core Concepts** 

Component - Top level component of the system. Traditionally called a CSCi. 
Process - A sub-component, typically called a CSC or CSU. Processes are meant to capture the physical architecture not the logical
Endpoint - A Function in a process (typically a REST Endpoint / Verb)
Technology - A Technology that runs separate from a Process (e.g. Elastic Search, Apache Kafka, DCOS)
Library - A third party libary that is used in the process or as an operating system depenendcy
Data Type - A Data Structure or file that is written or read by processes. This includes files, kafka messages, etc.
Intent - A intent that is handled or used by a process
Algorithm - Algorithm called by the process

<pre>
                        +---------------+
                        |               |
                        |   Component   |
                        |               |
                        +-------+-------+
                                ^
                                |
                        +-------+-------+
                        |               |
      +-----------------+   Process     +-------------------+
      |        +--------+               +----------+        |
      |        |        +-+--+-----+---++          |        |
      |        |          |  ^     |   ^           |        |
+-----v------+ |          |  |     |   |           |  +-----v---+
| Technology | |          |  |     |   |           |  |Algorithm|
+------------+ |          |  |     |   |           |  +---------+
               |          |  |     |   |           |
               |          |  |     |   |           |
         +-----v--+       |  |     |   |         +-v-------+
         | Library|       |  |     |   |         |Data Type|
         +--------+       |  |     |   |         +---------+
                          |  |     |   |
                      +---v--+-+  +v---+-+
                      |Endpoint|  |Intent|
                      +--------+  +------+
</pre>

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

Items remaining to do

### Data Model

- Redesign
- Figure out how to include dates and the time phasing of dependencies
- Make more representative sample data (2-4 hours)

### List Page

- Compact the format
- Column chooser
- Look at different table widget
- Support other types (not just processes)
 
### Analyze Dependencies Page


### Design Questions

1. Can people change the data

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `npm run ghpages` to build the project for Github Pages. The build artifacts are stored in the /docs folder and available at https://wtiger001.github.io/depends