module.exports = {
    port: process.env.PORT || 8000,
    environment: process.env.NODE_ENV || 'development',
    frontend: {
        base_url: process.env.FRONTEND_BASE_URL || 'http://localhost:3000',
    },
    database: {
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        host: process.env.DB_HOST || '127.0.0.1',
        name: process.env.DB_NAME || 'dokumenta',
        port: process.env.DB_PORT || 5432,
        client: process.env.DB_CLIENT || 'pg'
    }
}