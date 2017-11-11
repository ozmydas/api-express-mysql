import express from 'express';
import Task from '../models/task';

var router = express.Router();

/* GET REQUEST */
router.get('/:id?', function(req, res, next) {

	if(req.params.id){
	//jika ada parameter id maka ambil satu
		Task.getTaskById(req.params.id, (err, rows) => {
			if (err) {
				res.json(err);
			} else{
				res.json(rows);
			}
		})
	} else{
	//jika tidak ada parameter id maka ambil semua
		Task.getAllTask((err, rows) => {
			if (err) {
				res.json(err);
			} else{
				res.json(rows);
			}
		});
	}

});

/* POST REQUEST */
router.post('/', (req, res, next) => {
	Task.saveTask(req.body, (err, count) => {
		if (err) {
			res.json(err);
		} else{
			res.json(count);
		}
	});
});


/* PUT REQUEST */
router.put('/:id', (req, res, next) => {
	Task.updateTask(req.params.id, req.body, (err, rows) => {
		if (err) {
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});


/** DELETE REQUEST **/
router.delete('/:id', (req, res, next) => {
	Task.deleteTask(req.params.id, (err, rows) => {
		if (err) {
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});


export default router;
