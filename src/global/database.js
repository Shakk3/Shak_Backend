const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306, 
    username: 'root', 
    password: 'password', 
    database: 'test', 
    entities: [],
    synchronize: true,
});

async function initializeDatabase() {
    try {
        await AppDataSource.initialize();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = initializeDatabase;
