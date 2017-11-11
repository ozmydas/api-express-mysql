import db from '../dbconnect'; //koneksi yg tadi dibuat

var now = new Date();

var Task = {

//ambil semua data
	getAllTask: (callback) => {
		db.query("select * from t_task", callback);
	},

//ambil berdasarkan id
	getTaskById: (id, callback) => {
		db.query("select * from t_task where id=?", [id], callback);
	},

//simpan data baru
	saveTask: (data, callback) => {
		db.query("insert into t_task (name, status, created_datetime) values(?, ?, ?)", [data.name, data.status, now], callback);
	},

//ubah data yg ada
	updateTask: (id, data, callback) => {
		db.query("update t_task set name=?, status=?, updated_datetime=? where id=?", [data.name, data.status, now, id], callback);
	},

//hapus data
	deleteTask: (id, callback) => {
		db.query("delete from t_task where id=?", [id], callback);
	},

}

export default Task;
