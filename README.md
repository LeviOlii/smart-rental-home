# Especificação do projeto

# Requisitos funcionais / Funcionalidades

1. Usuário loga no sistema com suas credenciais através de interface interativa
2. Página inicial mostra as propriedades do usuário, bem como informações básicas de cada uma delas, como nome, endereço e quantidade de dispositivos.
3. Ao clicar em alguma de suas propriedades, mostra dashboard detalhando consumo em tempo real de cada dispositivo
4. Usuário poderá ir para uma página que mostrará relatório detalhado do consumo de cada dispositivo, bem como filtrar por data, por propriedade, e outras formas que decidirmos.

# Requisitos específicos

1. Autenticação JWT com geração de hash de encriptação de senha;
2. Armazenamento de informações num banco de dados para salvar dados do usuário, suas propriedades, os dispositivos de cada casa, o consumo de cada dispositivo (definir em que período esses dados são salvos no banco)
3. Conexão com ESP32 via protocolo MQTT. Como o protocolo MQTT opera diretamente sobre a camada TCP, os navegadores por questão de segurança, não possuem suporte a esse tipo de conexão. Navegadores suportam apenas conexões HTTP e via WebSockets. Como nosso produto deve receber informações em *real-time*, a perfeita sincronia entre o protocolo leve MQTT e o protocolo leve WebSocket que também permite uma comunicação leve, bidirecional e pouco custosa, e que ainda é suportada pelos navegadores, se torna uma solução ideal e será  escolhida.
4. Backend estruturado com banco de dados PostgreSQL com extensão TimescaleDB ou algo do tipo pra conseguir armazenar os dados 
5. Deploy gratuito

# Tecnologias utilizadas

**Frontend:** Typescript, HTML, CSS, Next.js

**Backend:** Nest.js, Node.js, MQTT / WebSocket PostgreSQL eu acho