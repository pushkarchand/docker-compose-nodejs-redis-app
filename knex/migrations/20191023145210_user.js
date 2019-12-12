
exports.up = function(knex) {
    return knex.schema.createTable('User', (table) => {
        table.increments('Id').primary();
        table.string('FirstName');
        table.string('MiddleName');
        table.string('LastName');
        table.string('Age');
        table.string('DOB');
        table.string('Address');
        table.string('EmailId');
        table.string('PhoneNo');
        table.timestamps(false, true);
    })
};

exports.down = exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
  };
  