exports.up = function(knex) {
    return knex.schema.createTable('donations', function (table) {
      table.increments();
      
      table.string('petname').notNullable();
      table.string('species').notNullable();
      table.string('sex').notNullable();
      table.string('port').notNullable();
      table.string('description').notNullable();	

      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('donations');
  };
