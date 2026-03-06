# STORM BOOSTS — Site de Resgate

Site estático para o sistema de resgate de boosts do Discord, pronto para hospedar no **GitHub Pages**.

## Estrutura

```
storm-boosts-site/
├── index.html          # Página de resgate (formulário)
├── order.html          # Status do pedido
├── 404.html            # Página de erro
├── assets/
│   ├── style.css       # Estilos globais
│   ├── app.js          # Configuração e utilitários
│   └── storm_logo.gif  # Logo animado
└── README.md
```

## Configuração

Antes de hospedar, edite o arquivo `assets/app.js` e altere a variável `API_BASE` para a URL do seu bot:

```javascript
const API_BASE = window.STORM_API_BASE || 'https://seu-bot.com';
```

Ou defina a variável global antes de carregar o script:

```html
<script>window.STORM_API_BASE = 'https://seu-bot.com';</script>
<script src="assets/app.js"></script>
```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em **Settings** > **Pages**
4. Em **Source**, selecione a branch `main` e pasta `/ (root)`
5. Clique em **Save**
6. O site estará disponível em `https://seuusuario.github.io/nome-do-repo/`

## CORS no Bot

O bot precisa aceitar requisições do seu domínio GitHub Pages. Adicione no `server.js`:

```javascript
import cors from 'cors';
app.use(cors({ origin: 'https://seuusuario.github.io' }));
```

Instale o pacote:

```bash
npm install cors
```

## by zorvmal
