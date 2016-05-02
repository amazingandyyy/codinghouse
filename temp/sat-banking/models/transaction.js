'use strict';

var db = require('../config/db');


db.query(`CREATE TABLE IF NOT EXISTS transactions(
    id VARCHAR(50) PRIMARY KEY,
    createdAt DATETIME,
    transactionDate DATETIME,
    desc TEXT,
    value DECIMAL
)`);

exports.getAll = (cb) =>{
    db.query('SELECT * FROM transactions', cb);
}

exports.create = (transaction, cb) =>{
    transaction.id = uuid();
    transaction.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    transaction.transactionDate = moment(transaction.transactionDate).valueOf('YYYY-MM-DD HH:mm:ss');

    db.query(`INSERT INTO transactions SET ?`, transaction, err=>{
        if(err) {
            cb(err);
        }else{
            cb(mull, transaction);
        }
    });
}
