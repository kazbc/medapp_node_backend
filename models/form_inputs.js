const db = require("../db_config");

//get all input types master data
exports.getAllInputTypes = function (req, res) {
  var sql = "SELECT * FROM form_fields WHERE status = 1";
  var query = db.query(sql, (err, rows, results) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};
