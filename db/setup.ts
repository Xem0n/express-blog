import { PoolConnection } from 'mariadb';
import pool from '../db';

const createTables = async (conn: PoolConnection) => {
    try {
        await conn.beginTransaction();
        await conn.query(`
            CREATE TABLE IF NOT EXISTS user (
                id int NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
                email varchar(256) NOT NULL UNIQUE,
                password varchar(64) NOT NULL,
                register_time datetime NOT NULL,
                last_login datetime NOT NULL,
                nickname varchar(64),
                name varchar(128),
                surname varchar(128)
            )`
        );
        await conn.commit();
    } catch (err) {
        console.log('coulnd\'t create all the tables due to error: ' + err);
        await conn.rollback();
    }
};

const setup = async () => {
    try {
        const conn = await pool.getConnection();
        createTables(conn);
        conn.release();
    } catch (err) {
        console.log('couldn\'t setup the db due to error:' + err);
    }
};

export default setup;