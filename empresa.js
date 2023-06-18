const pool = require('./databaseEmpresa');

class Empresa {
    constructor(id_empresa, nome_empresa, email) {
        this.id_empresa = id_empresa;
        this.nome_empresa = nome_empresa;
        this.email_empresa = email;
    }

    static async findAll() {
        const {rows} = await pool.query('SELECT * FROM empresa');
        return rows.map((row) => new Empresa(row.id_empresa, row.nome_empresa, row.email_empresa));
    }

    static async findById(id_empresa) {
        const {rows} = await pool.query('SELECT * FROM empresa WHERE id_empresa = $1', [id_empresa]);
        if (rows.length === 0) {
            return null;
        }
        const row = rows[0];
        return new Empresa(row.id_empresa, row.nome_empresa, row.email_empresa);
    }

    async save() {
        if (this.id_empresa) {
            await pool.query('UPDATE empresa SET nome_empresa = $1, email_empresa = $2 WHERE id_empresa = $3',
                [this.nome_empresa, this.email_empresa, this.id_empresa]);
        } else {
            const {rows} = await pool.query('INSERT INTO empresa (nome_empresa, email_empresa) VALUES ($1, $2) RETURNING id_empresa',
                [this.nome_empresa, this.email_empresa]);
            this.id_empresa = rows[0].id_empresa;
        }
    }

    async delete() {
        await pool.query('DELETE FROM empresa WHERE id_empresa = $1', [this.id_empresa]);
    }
}

module.exports = Empresa;
