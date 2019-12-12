module.exports = {
    "development": {
        "client": "mysql",
        "connection": {
            "host": "localhost",
            "port":"3308",
            "user": "root",
            "password": "password",
            "database": "test",
            "charset": "utf8"
        },
        "pool": {
            "min": 2,
            "max": 10
        },
        "migrations": {
            "directory": "../migrations",
            "tableName": "knex_migrations"
        }
    }
}