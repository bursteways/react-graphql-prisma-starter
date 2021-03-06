// This file connects to the remote prisma db and gives us
// the ability to query it with JS.
const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'generated/index',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true, // log to queries/mutations to console
});

module.exports = db;
