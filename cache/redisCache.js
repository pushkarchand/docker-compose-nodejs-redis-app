const redis = require('redis');

const client = redis.createClient({
    host: 'redis-server',
    port: 6380
})

module.exports=client;