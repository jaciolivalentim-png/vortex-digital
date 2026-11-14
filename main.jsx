
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Gamepad2,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageCircle,
  Mail,
  ChevronDown
} from 'lucide-react';

import './style.css';

// CONTATOS OFICIAIS
const CONTACT = {
  whatsapp: '5541987898207',
  email: ''
};

const whatsappLink = (message) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

const defaultMessage =
  'Olá! Conheci a Vortex Digital pelo site e gostaria de solicitar um orçamento.';

// SERVIÇOS
const services = [
  {
    icon: Code2,
    tag: '01 / WEB',
    title: 'Sites que impressionam.',
    desc: 'Sites institucionais, landing pages e experiências digitais responsivas que elevam a presença da sua marca.',
    items: [
      'Design responsivo',
      'Performance e SEO básico',
      'Experiência intuitiva'
    ]
  },
  {
    icon: Layers3,
    tag: '02 / SYSTEMS',
    title: 'Sistemas que simplificam.',
    desc: 'Plataformas web, dashboards e automações personalizadas para transformar processos em resultados.',
    items: [
      'Soluções sob medida',
      'Painéis administrativos',
      'Integrações e automações'
    ]
  },
  {
    icon: Gamepad2,
    tag: '03 / GAMES',
    title: 'Experiências que envolvem.',
    desc: 'Uma divisão criativa em desenvolvimento, dedicada a jogos digitais e experiências interativas.',
    items: [
      'Projetos independentes',
      'Jogos para navegador',
      'Experiências interativas'
    ]
  }
];

// PORTFÓLIO DEMONSTRATIVO
const projects = [
  {
    number: '01',
    category: 'SITE CONCEITO',
    title: 'Atelier Prime',
    desc: 'Conceito de site premium para negócios de serviços.',
    className: 'project-one',
    glyph: 'AP'
  },
  {
    number: '02',
    category: 'SISTEMA CONCEITO',
    title: 'Flow Dashboard',
    desc: 'Protótipo visual de painel de gestão e agendamentos.',
    className: 'project-two',
    glyph: 'FLOW'
  },
  {
    number: '03',
    category: 'GAME CONCEITO',
    title: 'Orbit',
    desc: 'Exploração visual de uma futura experiência interativa.',
    className: 'project-three',
    glyph: '◈'
  }
];

// LOGOTIPO
function Logo() {
  return (
    <a
      href="#inicio"
      className="brand"
      aria-label="Vortex Digital, início"
    >
      <span className="brand-mark">V</span>
      <span className="brand-words">
        VORTEX
        <small>DIGITAL</small>
      </span>
    </a>
  );
}

// APLICAÇÃO PRINCIPAL
function App() {
  const [menu, setMenu] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Sites profissionais',
    message: ''
  });

  const [feedback, setFeedback] = useState('');

  const goContact = () => {
    setMenu(false);
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // FORMULÁRIO INTEGRADO AO WHATSAPP
  function submit(e) {
    e.preventDefault();

    const message = [
      'Olá! Conheci a Vortex Digital pelo site.',
      '',
      'Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Serviço: ${form.service}`,
      `Descrição do projeto: ${form.message}`
    ].join('\n');

    const url = whatsappLink(message);

    const opened = window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );

    if (!opened) {
      window.location.href = url;
    }

    setFeedback(
      'Sua mensagem foi preparada. Confirme o envio no WhatsApp.'
    );
  }

  return (
    <>
      {/* CABEÇALHO */}
      <header className="header">
        <div className="container header-inner">
          <Logo />

          <nav
            className={menu ? 'nav open' : 'nav'}
            aria-label="Navegação principal"
          >
            {[
              ['Início', 'inicio'],
              ['Serviços', 'servicos'],
              ['Portfólio', 'portfolio'],
              ['Sobre', 'sobre'],
              ['Contato', 'contato']
            ].map(([name, id]) => (
              <a
                key={id}
                href={'#' + id}
                onClick={() => setMenu(false)}
              >
                {name}
              </a>
            ))}

            <button
              className="nav-mobile-cta"
              onClick={goContact}
            >
              Solicitar orçamento
              <ArrowUpRight size={17} />
            </button>
          </nav>

          <button
            className="header-cta"
            onClick={goContact}
          >
            Vamos conversar
            <ArrowUpRight size={16} />
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* PÁGINA INICIAL */}
        <section className="hero" id="inicio">
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>

          <div className="container hero-inner">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                ESTÚDIO DE SOLUÇÕES DIGITAIS
              </div>

              <h1>
                O futuro da sua marca
                <em> começa aqui.</em>
              </h1>

              <p>
                Desenvolvemos experiências digitais com
                estratégia, design e tecnologia. Da primeira
                ideia à próxima grande conquista.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-gold"
                  onClick={goContact}
                >
                  Tire seu projeto do papel
                  <ArrowUpRight size={18} />
                </button>

                <a
                  className="btn btn-outline"
                  href="#portfolio"
                >
                  Explorar portfólio
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="hero-foot">
                <span>
                  <CheckCircle2 size={16} />
                  Soluções sob medida
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Design de alto padrão
                </span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-a"></div>
              <div className="orbit orbit-b"></div>
              <div className="orbit orbit-c"></div>

              <div className="hero-emblem">V</div>

              <div className="art-label top">
                DESIGN <span>×</span> TECNOLOGIA
              </div>

              <div className="art-label bottom">
                EST. 2026 / VORTEX DIGITAL
              </div>
            </div>
          </div>

          <a className="scroll-cue" href="#servicos">
            DESCUBRA MAIS
            <ChevronDown size={15} />
          </a>
        </section>

        {/* SERVIÇOS */}
        <section
          className="section services"
          id="servicos"
        >
          <div className="container">
            <div className="section-top">
              <div>
                <span className="kicker">
                  O QUE FAZEMOS
                </span>

                <h2>
                  Ideias ambiciosas.
                  <br />
                  <span>Execução inteligente.</span>
                </h2>
              </div>

              <p>
                Cada projeto é uma oportunidade de criar
                algo memorável, funcional e feito para evoluir.
              </p>
            </div>

            <div className="service-grid">
              {services.map((s) => (
                <article
                  className="service-card"
                  key={s.tag}
                >
                  <div className="service-top">
                    <span>{s.tag}</span>
                    <s.icon
                      size={27}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>

                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>
                        <span className="tiny-dot"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={goContact}
                    className="text-link"
                  >
                    Conversar sobre um projeto
                    <ArrowUpRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FRASE INSTITUCIONAL */}
        <section className="statement">
          <div className="container statement-inner">
            <Sparkles size={25} />

            <p>
              Não entregamos apenas código.
              Criamos <strong>possibilidades.</strong>
            </p>

            <span>VORTEX / PHILOSOPHY</span>
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section
          className="section portfolio"
          id="portfolio"
        >
          <div className="container">
            <div className="section-top">
              <div>
                <span className="kicker">
                  PORTFÓLIO
                </span>

                <h2>
                  Projetos que mostram
                  <br />
                  <span>o que é possível.</span>
                </h2>
              </div>

              <p>
                Conceitos criativos que representam nossa
                direção visual e técnica. Não são trabalhos
                contratados.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((p) => (
                <article
                  className="project-card"
                  key={p.number}
                >
                  <div
                    className={
                      'project-art ' + p.className
                    }
                  >
                    <span className="project-art-tag">
                      DEMONSTRAÇÃO
                    </span>

                    <span className="project-glyph">
                      {p.glyph}
                    </span>

                    <div className="project-art-line"></div>
                  </div>

                  <div className="project-info">
                    <div>
                      <span>{p.category}</span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>

                    <span className="project-number">
                      {p.number}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="portfolio-note">
              Os exemplos acima são conceitos de portfólio
              e serão substituídos ou complementados por
              projetos reais à medida que forem concluídos.
            </p>
          </div>
        </section>

        {/* SOBRE A EMPRESA */}
        <section
          className="section about"
          id="sobre"
        >
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-visual-inner">
                <span>VORTEX</span>
                <div className="about-v">V</div>
                <small>BUILDING WHAT'S NEXT.</small>
              </div>
            </div>

            <div className="about-copy">
              <span className="kicker">
                QUEM SOMOS
              </span>

              <h2>
                Uma nova visão
                <br />
                para o <span>digital.</span>
              </h2>

              <p>
                A Vortex Digital nasce com um propósito
                claro: transformar boas ideias em soluções
                digitais relevantes. Unimos pensamento
                criativo, tecnologia e atenção aos detalhes
                para construir experiências que fazem sentido.
              </p>

              <p>
                Estamos construindo nosso caminho com
                dedicação, transparência e vontade de
                evoluir junto de cada projeto.
              </p>

              <div className="values">
                <div>
                  <ShieldCheck />
                  <strong>Compromisso</strong>
                  <span>
                    Comunicação clara em cada etapa.
                  </span>
                </div>

                <div>
                  <Zap />
                  <strong>Inovação</strong>
                  <span>
                    Soluções atuais e funcionais.
                  </span>
                </div>

                <div>
                  <Sparkles />
                  <strong>Qualidade</strong>
                  <span>
                    Cuidado com cada detalhe.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO E ORÇAMENTO */}
        <section
          className="contact section"
          id="contato"
        >
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="kicker">
                VAMOS CRIAR ALGO?
              </span>

              <h2>
                Sua próxima grande ideia
                <span> começa com uma conversa.</span>
              </h2>

              <p>
                Conte o que você imagina. Vamos entender
                suas necessidades e pensar na melhor
                solução para seu projeto.
              </p>

              {CONTACT.email && (
                <div className="contact-detail">
                  <Mail size={20} />
                  <span>{CONTACT.email}</span>
                </div>
              )}

              <div className="contact-detail">
                <MessageCircle size={20} />
                <a
                  href={whatsappLink(defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: (41) 98789-8207
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={submit}
            >
              <h3>Conte sobre seu projeto</h3>

              <label>
                Seu nome
                <input
                  required
                  maxLength="100"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value
                    })
                  }
                  placeholder="Como podemos chamar você?"
                />
              </label>

              <label>
                Seu e-mail
                <input
                  required
                  type="email"
                  maxLength="150"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value
                    })
                  }
                  placeholder="voce@exemplo.com"
                />
              </label>

              <label>
                O que você precisa?
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      service: e.target.value
                    })
                  }
                >
                  <option>Sites profissionais</option>
                  <option>Sistemas web</option>
                  <option>
                    Jogos e experiências interativas
                  </option>
                  <option>Outro projeto</option>
                </select>
              </label>

              <label>
                Sobre o projeto
                <textarea
                  required
                  maxLength="2000"
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value
                    })
                  }
                  placeholder="Descreva brevemente sua ideia..."
                />
              </label>

              <button
                className="btn btn-gold submit"
                type="submit"
              >
                Solicitar orçamento pelo WhatsApp
                <ArrowUpRight size={18} />
              </button>

              {feedback && (
                <p
                  className="form-feedback"
                  role="status"
                >
                  {feedback}
                </p>
              )}

              <small>
                Ao enviar, o WhatsApp será aberto com
                sua mensagem preparada. O envio precisa
                ser confirmado por você.
              </small>
            </form>
          </div>
        </section>
      </main>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={whatsappLink(defaultMessage)}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        title="Fale com a Vortex Digital"
      >
        <MessageCircle size={28} />
      </a>

      {/* RODAPÉ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <Logo />

              <p>
                Tecnologia que transforma ideias
                em experiências.
              </p>
            </div>

            <div className="footer-links">
              <a href="#inicio">Início</a>
              <a href="#servicos">Serviços</a>
              <a href="#portfolio">Portfólio</a>
              <a href="#sobre">Sobre</a>
              <a href="#contato">Contato</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Vortex Digital.
              Todos os direitos reservados.
            </span>

            <span>
              CRIADO PARA O PRÓXIMO NÍVEL.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);
