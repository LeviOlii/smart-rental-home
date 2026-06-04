# Smart Rental Home — IoT & Gestão de Aluguéis Inteligentes (TCC)

![Arquitetura](https://img.shields.io/badge/Architecture-Event--Driven-blue)
![Frontend](https://img.shields.io/badge/Frontend-Next.js-black)
![Backend](https://img.shields.io/badge/Backend-NestJS-red)
![IoT](https://img.shields.io/badge/IoT-MQTT%20%2B%20WebSockets-green)
![DB](https://img.shields.io/badge/Database-PostgreSQL%20%2B%20Timescale-blue)

O **Smart Rental Home** é um sistema projetado para revolucionar a locação de imóveis de temporada (como Airbnb ou casas de praia), permitindo a automação do acesso, controle de pacotes de energia/dispositivos e monitoramento em tempo real do consumo via dispositivos IoT (ESP32).

Este repositório contém o código fonte do **Frontend** (Next.js) e do **Backend** (NestJS), operando em conjunto com um ecossistema MQTT de mensageria.

---

## 📌 Visão Geral do Sistema

O sistema resolve o problema da gestão de pacotes de aluguel (ex: pacote Básico sem ar-condicionado vs. pacote Gold com tudo liberado) através da **IoT**.

1. **Gestão de Propriedades e Dispositivos:** Locadores cadastram a casa e os disjuntores/sensores inteligentes que ela possui.
2. **Pacotes via QR Code:** O sistema gera URLs únicas (QR Codes) para cada nível de pacote. O cliente escaneia, simula o pagamento e o sistema **automaticamente** aciona os disjuntores correspondentes no quadro elétrico físico.
3. **Estadias (Sessões):** O sistema mede o tempo de uso, o consumo em *kWh* e, se o pacote tiver franquia de energia, cobra o excedente no checkout.
4. **Dashboard em Tempo Real:** O locador acompanha a tensão, corrente, potência e energia consumida em tempo real pela interface, sem precisar recarregar a página.

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura baseada em **Monolito Modular** (para facilitar o deploy ágil do MVP) com componentes fortemente inspirados em **Arquitetura Orientada a Eventos (Event-Driven)** para a comunicação com a camada física.

### Diagrama de Comunicação IoT (Real-Time)

```mermaid
flowchart LR
    subgraph "Camada Física (IoT)"
        ESP[ESP32 / Sensores]
    end
    subgraph "Camada de Mensageria"
        Broker[(Broker MQTT \n broker.iracema.xyz)]
    end
    subgraph "Backend (NestJS)"
        API[Serviços REST / CRUD]
        MQTT[MqttService]
        WS[RealtimeGateway]
        DB[(PostgreSQL / Prisma)]
    end
    subgraph "Frontend (Next.js)"
        UI[Painel React]
    end

    ESP -- "1. Publica Grandezas \n(ex: 45W, 220V)" --> Broker
    Broker -- "2. Entrega Tópico Inscrito" --> MQTT
    MQTT -- "3. Salva no DB" --> DB
    MQTT -- "4. Emite Evento \n Interno" --> WS
    WS -- "5. WebSocket: telemetry_update" --> UI
    
    UI -. "A. Click 'Ligar'" .-> WS
    WS -. "B. Comando" .-> MQTT
    MQTT -. "C. Publish 'ON'" .-> Broker
    Broker -. "D. Aciona Relé" .-> ESP
```

### Tecnologias Utilizadas

#### Frontend (`/frontend`)
- **Framework:** Next.js (App Router) + React
- **Estilização:** Tailwind CSS + Lucide Icons + Recharts (Gráficos)
- **Tempo Real:** `socket.io-client` para receber eventos instantâneos do servidor sem *polling*.
- **Comunicação API:** Rotas modularizadas (`lib/api.ts`) usando `fetch`.

#### Backend (`/backend`)
- **Framework:** NestJS (Node.js) com TypeScript
- **Banco de Dados:** PostgreSQL (com schema preparado para agregar *TimescaleDB* caso necessário para hytertables).
- **ORM:** Prisma
- **Mensageria:** `mqtt.js` para conexão robusta com o broker, suportando parsing automático de JSON de grandezas elétricas.
- **WebSockets:** `@nestjs/websockets` e `Socket.IO` servindo a porta de comunicação bidirecional.
- **Autenticação:** JWT (Json Web Token) com bcrypt.

---

## ⚙️ Funcionalidades Principais

### 1. Sistema de QR Code Dinâmico
Cada casa gera vários pacotes (`RentalPackages`). A tela de `/access/[id]` é pública: qualquer hóspede aponta a câmera, vê os limites do pacote (ex: "Sem Ar-Condicionado"), clica em confirmar e o backend cria a **Sessão de Estadia**, ligando apenas as tomadas autorizadas.

### 2. Fluxo Bidirecional IoT (ESP32)
O Backend não usa APIs REST lentas para falar com o ESP32.
- **O ESP32** assina tópicos como `casa/medicao`.
- O **Backend NestJS** assina esse mesmo tópico e salva no banco de dados todas as medições históricas de energia.
- O **Next.js** abre uma conexão WebSocket `ws://` com o Backend, o que torna o dashboard incrivelmente rápido e responsivo aos cliques e leituras do relógio de energia.

### 3. Parse Inteligente de JSON (Fallback Automático)
O MqttService foi otimizado para lidar com telemetrias complexas. Se o microcontrolador enviar um objeto completo:
```json
{
  "tensao": 225.50,
  "corrente": 0.37,
  "potencia": 47.50,
  "energia": 0.712,
  "frequencia": 60.0,
  "pf": 0.58
}
```
O Backend desmembra, salva a potência nominal como referência pro banco relacional e empurra o objeto completo para o painel Front-End renderizar informações precisas como `225.5V • 0.37A`.

---

## 🚀 Como Rodar o Projeto Localmente

### 1. Requisitos
- Node.js (v18+)
- Docker (para subir o PostgreSQL)
- Um Broker MQTT na nuvem (ou local)

### 2. Configurando o Banco de Dados
Acesse a pasta raiz do projeto e inicie o container de banco de dados (já fornecido):
```bash
# Na raiz do projeto
./start-docker.ps1
# ou `docker-compose up -d`
```

### 3. Configurando o Backend
```bash
cd backend
npm install
```
Configure as variáveis no `.env` do backend:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5433/smart_rental_home?schema=public"
JWT_SECRET="seu-segredo"
MQTT_BROKER_URL="mqtt://broker.iracema.xyz:1883"
MQTT_BROKER_USERNAME="xxx"
MQTT_BROKER_PASSWORD="xxx"
```

Inicie o Prisma e o Servidor NestJS:
```bash
npx prisma db push
npx prisma db seed # Opcional: Para gerar locador e casas mockadas
npm run start:dev
```

### 4. Configurando o Frontend
```bash
cd frontend
npm install
```
Configure o `.env` do frontend (na raiz do `/frontend`):
```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

Inicie o servidor de desenvolvimento Next.js:
```bash
npm run dev
```

---

## 🛡️ Decisões Arquiteturais e Padrões (Design Patterns)

Conforme a *Deep Research* e planejamento estratégico do projeto, algumas decisões nortearam o desenvolvimento:

- **Monolito Modular:** Ao invés de *Microservices* prematuros, o backend em NestJS é dividido em módulos de domínio estritos (`AuthModule`, `DevicesModule`, `StaySessionsModule`). Isso permite um deploy fácil em serviços como Render ou Fly.io e mantém o baixo overhead, crucial para equipes pequenas e prazos curtos.
- **Port & Adapters (Inspiração Hexagonal):** O uso de Injeção de Dependência (`@Injectable`) pelo Nest permite que serviços como `MqttService` funcionem como "Adapters" para o protocolo de hardware, enquanto `StaySessionsService` concentra exclusivamente a lógica de negócio (Core).
- **Polyfill para BigInt:** O Prisma lida com chaves gigantes e agregados via `BigInt`, que o JavaScript nativo não sabe serializar via JSON. Adotamos um *Monkey Patch* no arquivo `main.ts` garantindo que toda a aplicação possa exportar BigInt em forma de String para a web.

---

> Desenvolvido como Projeto de Conclusão de Curso (TCC) para o curso de Engenharia da Computação.