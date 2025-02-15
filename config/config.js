require('dotenv').config({ path: '.env.local' })

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432
  }
  // TODO: come back here where deploying
  // production: {
  //   username: process.env.DB_USERNAME_PROD,
  //   password: process.env.DB_PASSWORD_PROD,
  //   database: process.env.DB_NAME_PROD,
  //   host: process.env.DB_HOST_PROD,
  //   port: process.env.DB_PORT || 5432,
  //   dialect: 'postgres',
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false
  //     }
  //   }
  // }
}
