import mysql from 'mysql';

var connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'db_tes',
});

export default connection;