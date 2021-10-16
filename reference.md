What is Promise ?
- Way of handling async JS 
- Eagerly executed
- Single Data/ Value
- Are one shot
- Resolved/ Reject


What is Observable ?
- an Object, can observe flow of data
- Observe the data source
- Lazily Executed
- Multiple Value
- Keep an eye on DataSource
- Flatten operators
- Are Cancellable / unsubscribeable
- are cold, by default
- Extensive operators


# Environment Setup

-> npm init -y
-> npm install parcel -D
-> npm install rxjs --save

-> create index.html & app.js
-> script in package.json -> "dev" : "parcel src/index.html"
-> npm run dev