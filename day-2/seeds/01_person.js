exports.seed = function (knex) {

    return knex('persons').insert([
      {
        "first_name" : "Jan",
        
      },
      
    ]);
  };
  