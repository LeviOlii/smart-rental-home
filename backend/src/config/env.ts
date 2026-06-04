/**
 * Carrega variáveis de ambiente da raiz do monorepo ANTES de qualquer módulo NestJS.
 * Deve ser importado como primeiro import em main.ts.
 *
 * Por que arquivo separado?
 * TypeScript hoista todos os `import` para o topo do arquivo compilado.
 * Se colocarmos dotenv.config() inline em main.ts, ele rodaria DEPOIS de
 * AppModule ser carregado — tarde demais para o PrismaService ler DATABASE_URL.
 * Com um arquivo separado, o require() roda de forma síncrona e completa
 * ANTES de qualquer outro módulo ser carregado.
 */

import * as path from 'path';
import * as dotenv from 'dotenv';

// __dirname em runtime: backend/dist/src/config/
// Subindo 4 níveis chega em smart-rental-home/
const rootEnvPath = path.resolve(__dirname, '..', '..', '..', '..', '.env');
const result = dotenv.config({ path: rootEnvPath });

if (result.error) {
  // Fallback: tenta .env no cwd (caso rode diretamente de backend/)
  dotenv.config();
}
