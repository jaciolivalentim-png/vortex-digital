# Vortex Digital — Site oficial

Site responsivo em React + Vite, com seções Início, Serviços, Portfólio, Sobre e Contato.

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

## Publicar no Render (Static Site)

1. Envie a pasta do projeto para um repositório GitHub.
2. No Render, crie **New > Static Site** e conecte o repositório.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Publique. O Render fornecerá uma URL para acesso.

## Configuração obrigatória antes de receber contatos

No início de `src/main.jsx`, altere:

```js
const CONTACT = { whatsapp: '', email: '' };
```

Exemplo de formato para WhatsApp brasileiro: `5541999999999` (substitua pelo seu número real, apenas dígitos). Ou preencha o e-mail comercial. Sem essa configuração, o formulário funciona apenas como demonstração e informa isso ao visitante.

O formulário **não possui backend**, não grava dados e não envia mensagens automaticamente: abre o WhatsApp ou aplicativo de e-mail para o visitante confirmar o envio. Para um formulário com envio direto, será necessário configurar backend ou provedor de formulários, com validação e proteção antispam.

## Observações

- O portfólio contém **conceitos fictícios**, claramente identificados como demonstração. Substitua por projetos reais com autorização quando disponíveis.
- A divisão Games é apresentada como em desenvolvimento.
- Antes de publicar comercialmente, confirme disponibilidade do nome/marca e domínio, revise dados comerciais, política de privacidade se aplicável, acessibilidade e testes em dispositivos.
- Fonte Google Fonts requer conexão de rede; fallback local está definido.
