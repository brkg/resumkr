const { Pool } = require('pg');
const { SourceMapDevToolPlugin } = require('webpack');

const PG_URI = 'postgres://yvngawyd:fPr458tFi73SmbCE3R3rgxxIKveVumGl@chunee.db.elephantsql.com/yvngawyd';
            

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: async (text, params, callback) => {
    console.log('executed query', text);
    return await pool.query(text, params, callback);
  }
};
