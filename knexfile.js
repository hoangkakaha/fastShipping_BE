// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'fast_shipping',
    user: 'root',
    password: 'nhathoang'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations'
  }
};
