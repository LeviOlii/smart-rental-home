/**
 * Carrega variáveis de ambiente antes de qualquer módulo NestJS.
 * Em produção (Render, etc.), as variáveis são injetadas diretamente no ambiente
 * e nenhum arquivo .env é necessário.
 * Em desenvolvimento local, tenta carregar o .env da raiz do monorepo ou da pasta backend/.
 */

import * as path from 'path';
import * as dotenv from 'dotenv';

// Em produção as variáveis já estão disponíveis via process.env.
// O dotenv.config com { override: false } garante que não sobrescreve
// variáveis já definidas no ambiente — seguro para produção e dev.
const locations = [
  path.resolve(__dirname, '..', '..', '..', '..', '.env'), // raiz monorepo (local: 4 níveis acima de dist/src/config)
  path.resolve(__dirname, '..', '..', '..', '.env'),       // raiz monorepo (local: 3 níveis, caso estrutura mude)
  path.resolve(process.cwd(), '.env'),                      // cwd (backend/)
];

for (const envPath of locations) {
  const result = dotenv.config({ path: envPath, override: false });
  if (!result.error) break; // Para assim que encontrar um arquivo válido
}
