module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceu4kgirrk01m31dqg9g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_5jax'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'oUlOLr9LhnBB5IbqkqW2nfnNt3AO1LD2'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
