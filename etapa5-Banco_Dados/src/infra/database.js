// Importa as variáveis de ambiente do arquivo .env para process.env
import 'dotenv/config';

// Importa o módulo 'pg' (PostgreSQL) para conectar ao banco de dados
import pg from 'pg';

// Extrai a classe Pool do módulo pg
const { Pool } = pg;

// Cria uma instância de Pool, que gerencia múltiplas conexões com o banco de dados de forma eficiente
// A string de conexão é obtida das variáveis de ambiente (.env)
const db = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Exporta a instância do Pool para ser utilizada em outras partes da aplicação
export default db;