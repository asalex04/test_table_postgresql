import db from '../db.js'

class TableController {
    async createRow(req, res) {
        const { date, title, quantity, distance } = req.body
        const newRow = await db.query('INSERT INTO test (date, title, quantity, distance) ' +
        'VALUES ($1, $2, $3, $4) RETURNING *', [date, title, quantity, distance])
        res.json(newRow.rows[0])
    }
    async getRows(req, res) {
        const tables = await db.query('SELECT * FROM test')
        res.json(tables.rows)
    }
    async getOneRow(req, res) {
        const id = req.params.id
        const row = await db.query('SELECT * FROM test where id = $1', [id])
        res.json(row.rows[0])
    }
    async updateRow(req, res) {
        const { id, date, title, quantity, distance } = req.body
        const row = await db.query('UPDATE test set date = $1, title = $2, quantity = $3, distance = $4 ' +
            'where id = $5 RETURNING *', [date, title, quantity, distance, id])
        res.json(row.rows[0])
    }
    async deleteRow(req, res) {
        const id = req.params.id
        const row = await db.query('DELETE FROM test where id = $1', [id])
        res.json(row.rows[0])
    }
}

export default new TableController()
