## Artillery Gist


##### yml file

```yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 100
  http:
    pool: 10
  defaults:
    headers:
      x-my-service-auth: '987401838271002188298567'
scenarios:
  - flow:
    - get:
        url: "/overview/2"
  - flow:
    - post:
        url: '/overview/ratings'
        json: 
          res_id: "12312"
          username: "larrychou"
          ratings: 5
          gender: "M"
```

### GET tests

```
All virtual users finished
Summary report @ 19:39:43(-0800) 2019-03-08
  Scenarios launched:  60000
  Scenarios completed: 60000
  Requests completed:  60000
  RPS sent: 934
  Request latency:
    min: 0.6
    max: 199.3
    median: 1.4
    p95: 5.7
    p99: 42.4
  Scenario counts:
    0: 60000 (100%)
  Codes:
    200: 60000
```


### POST tests

```
All virtual users finished
Summary report @ 20:07:38(-0800) 2019-03-08
  Scenarios launched:  60000
  Scenarios completed: 60000
  Requests completed:  60000
  RPS sent: 986.19
  Request latency:
    min: 0.6
    max: 136.2
    median: 0.9
    p95: 2
    p99: 5.5
  Scenario counts:
    0: 60000 (100%)
  Codes:
    201: 60000
```

