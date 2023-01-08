module.exports = function(options){

  const db = [];

  const log = function(command){

    if(command) db.push(command);

    return db;

  }

  const replay = function(log, commands, data){

  }

  return {
    log,
    replay,
  }

}
