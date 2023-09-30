
# Task Planner
Node app for creating, updating and listing all the tasks

## Installation

#use local instance of mysql and make necessary chnages in config.json as per your database credentials
```bash
  cd task_tracker
  npm install
  npm start
```
    
## API Reference

#### Get all tasks

```http
  GET /tasks?page=${page}&limit=${limit}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` |  page number |
| `limit` | `string` |  number of tasks per page |

#### Get metrics
```http
  GET /tasks/metrics?status=${status}&date=${date}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status` | `string` |  status of task |
| `date` | `date` |  timeline|

#### create task

```http
  POST /tasks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `taskId` | `string` |  unique and primary key |
| `date` | `date` |  number of tasks per page |
| `user` | `string` |  task of user |
| `status` | `string` |  status of task |
| `timeline` | `date` |  date to complete task|

#### update task

```http
  PUT /tasks/:taskId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskId`      | `string` | **Required**. Id of item to fetch |



