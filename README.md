# Todo Project Backend

Este repositório contém o backend de um sistema de gerenciamento de tarefas (Todo), desenvolvido em Node.js com TypeScript, utilizando Fastify, Drizzle ORM e PostgreSQL. O projeto segue uma arquitetura modular e orientada a domínio, facilitando a escalabilidade, manutenção e testes.

---

## 📚 **Arquitetura**

O projeto está organizado nos seguintes módulos principais:

- **src/domain**:  
  Contém as regras de negócio, entidades, repositórios e casos de uso (use-cases) seguindo os princípios do DDD (Domain-Driven Design).

- **src/infra**:  
  Implementações de infraestrutura, como controladores HTTP (Fastify), repositórios de acesso a dados (Drizzle ORM), e configuração do servidor.

- **src/db**:  
  Schema das tabelas e scripts de migração do banco de dados.

- **drizzle/**:  
  Pasta onde ficam as migrações geradas pelo Drizzle ORM.

---

## 🛠️ **Principais Bibliotecas Utilizadas**

- **[Fastify](https://www.fastify.io/):** Framework web rápido e eficiente para Node.js, utilizado para expor as rotas HTTP.
- **[Drizzle ORM](https://orm.drizzle.team/):** ORM moderno e typesafe para integração com bancos de dados relacionais, neste caso, PostgreSQL.
- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional utilizado para persistência das tarefas.
- **[Vitest](https://vitest.dev/):** Framework de testes para TypeScript.
- **[CUID2](https://github.com/paralleldrive/cuid2):** Geração de IDs únicos para entidades.
- **[TSX](https://github.com/esbuild/tsx):** Execução de arquivos TypeScript sem necessidade de build prévio, útil para ambiente de desenvolvimento.
- **[Docker](https://www.docker.com/):** Utilizado para facilitar o setup do banco de dados PostgreSQL via Docker Compose.

---

## 🗂️ **Estrutura de Pastas**

```
src/
  core/                # Tipos e entidades base
  domain/
    application/       # Casos de uso, DTOs e repositórios (interfaces)
    enterprise/        # Entidades do domínio
  infra/
    database/          # Implementações de repositórios (Drizzle)
    factories/         # Fábricas de casos de uso
    http/
      controllers/     # Controladores Fastify (rotas)
      server.ts        # Inicialização do servidor Fastify
db/
  schema/              # Schemas das tabelas (Drizzle ORM)
  migrate.ts           # Script de migração
drizzle/               # Migrações geradas
```

---

## 🚀 **Como rodar o projeto**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/todoprojectbackend.git
   cd todoprojectbackend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Certifique-se de ter o Docker instalado.
   - Suba o banco de dados PostgreSQL:
     ```bash
     docker-compose up -d
     ```
   - Configure a variável de ambiente `DATABASE_URL` no arquivo `.env`:
     ```
     DATABASE_URL=postgres://docker:docker@localhost:5432/tododb
     ```

4. **Rode as migrações:**
   ```bash
   npm run migrate
   ```

5. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 🧪 **Testes**

Execute os testes com:
```bash
npm test
```

---

## 📑 **Exemplo de Request**

Utilize o arquivo [`api.http`](api.http) para testar a criação de tarefas:

```http
POST http://localhost:3000/tasks
content-type: application/json

{
    "name": "estudar AWS amanhã",
    "description": "Estudar para a certificação AWS",
    "status": "PENDING",
    "ownerId": "1"
}
```

---

## 📝 **Observações**

- O projeto utiliza TypeScript com tipagem estrita.
- O padrão de repositório desacopla a lógica de domínio da infraestrutura.
- O Drizzle ORM garante queries typesafe e migrações automáticas.
- O Fastify oferece alta performance para APIs HTTP.

---

## 📄 **Licença**

Este projeto está licenciado sob os termos do ISC License.
