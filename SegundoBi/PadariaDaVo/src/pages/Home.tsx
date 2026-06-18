import { useEffect, useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css"
import "../styles/pricing.css";
import "../styles/footer.css";

import logo from "../assets/logo-padaria.png"
import PaoFrances from "../assets/pao-frances.jpeg";
import PaoDeQueijo from "../assets/pao-de-queijo.jpg";
import Bolos from "../assets/bolos.jpeg";

export default function Home() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {

    const html = document.querySelector("html");

    if (html) {
      html.style.overflow =
        showMobileMenu ? "hidden" : "auto";
    }

  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">

        <nav className="flex items-center justify-between">

          <img src={logo} alt="logo-padaria" width={100} />

          <div className="desktop-only">

            <ul className="flex gap-1">

              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#solution">Produtos</a>
              </li>

              <li>
                <a href="#testimonials">Cliente</a>
              </li>

              <li>
                <a href="#pricing">Combos</a>
              </li>

              <li>
                <a href="#contact">Contato</a>
              </li>

            </ul>
          </div>

          <div className="desktop-only">

            <div className="flex items-center">

              <a className="reverse-color ml-lg" href="#">
                Cardápio
              </a>

              <Button text="Fazer Pedido" />

            </div>

          </div>

          <div className="mobile-menu">

            {showMobileMenu ? (

              <div className="mobile-menu-content">

                <div className="container flex">

                  <ul>

                    <li>
                      <a href="#">Home</a>
                    </li>

                    <li>
                      <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution">Soluções</a>
                    </li>

                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>

                    <li>
                      <a href="#pricing">Preços</a>
                    </li>

                    <li>
                      <a href="#contact">Contato</a>
                    </li>

                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>

                  </ul>

                  <span
                    onClick={() => setShowMobileMenu(false)}
                    className="btn-wrapper"
                  >
                    X
                  </span>

                </div>

              </div>

            ) : (

              <span
                onClick={() => setShowMobileMenu(true)}
                className="btn-wrapper"
              >
                ☰
              </span>

            )}

          </div>

        </nav>

      </header>

      <section id="hero">

        <div className="container content">

          <p className="desktop-only">
            Feitos com carinho todos os dias
          </p>

          <h1>
            O sabor do pão quentinho que transforma seu dia.
          </h1>

          <p>
            Produzimos diariamente pães, bolos e salgados fresquinhos,
            preparados com ingredientes selecionados e muito carinho.
          </p>

          <div className="flex gap-1">

            <span>
              <Button text="Ver Cardápio" />
            </span>

            <span className="desktop-only">
              <Button
                text="Conheça a Padaria"
                secondary
              />
            </span>

          </div>

        </div>

      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Nossos Produtos</h2>
            <span className="desktop-only">
              <h2>Feitos com carinho todos os dias</h2>
            </span>
          </span>
          <p>
            A <strong>Padaria Da Carmen</strong> prepara diariamente
            pães, bolos e salgados utilizando ingredientes selecionados
            para oferecer sabor e qualidade em cada receita.
          </p>
        </header>

        <div className="even-columns">
          <Card
            image={PaoFrances}
            alt="Pão Francês"
            title="Pão Francês"
            description="Crocante por fora, macio por dentro e sempre fresquinho. O clássico que não pode faltar na mesa dos brasileiros."
          />
          <Card
            image={PaoDeQueijo}
            alt="Pão de Queijo"
            title="Pão de Queijo"
            description="Receita tradicional com muito queijo, perfeita para acompanhar um café quentinho."
          />
          <Card
            image={Bolos}
            alt="Bolos Caseiros"
            title="Bolos Caseiros"
            description="Diversos sabores preparados diariamente, trazendo o gostinho de receita feita em casa."
          />
        </div>

      </section>

      <section id="testimonials">

        <header>

          <span>
            <p className="desktop-only">
              Quem prova, aprova
            </p>

            <h2>
              O que nossos clientes dizem
            </h2>
          </span>

          <p>
            A satisfação dos nossos clientes é o ingrediente mais importante.
          </p>

        </header>

        <section className="carousel">

          <div className="carousel-content">
            <TestimonialCard testimony="O pão francês é sempre fresquinho e crocante. Já virou tradição comprar aqui toda manhã." rating={5} name="Ana Souza" role="Cliente" />
            <TestimonialCard  testimony="Os bolos são deliciosos e lembram receitas de família." rating={5} name="Marcos Oliveira" role="Cliente" />
            <TestimonialCard  testimony="Melhor café da manhã da cidade." rating={5} name="Juliana Costa" role="Cliente" />
            <TestimonialCard  testimony="O pão francês é sempre fresquinho e crocante. Não consigo começar o dia sem passar aqui." rating={5} name="Maria Oliveira" role="Cliente" />
            <TestimonialCard  testimony="O café é delicioso e combina perfeitamente com os pães de queijo da casa." rating={5} name="João Ferreira" role="Cliente" />
            <TestimonialCard  testimony="Os bolos caseiros são incríveis. O de cenoura com chocolate é o meu favorito." rating={5} name="Ana Clara" role="Cliente" />
            <TestimonialCard  testimony="Melhor pão de queijo da região. Sempre quentinho e com bastante sabor." rating={5} name="Carlos Mendes" role="Cliente" />
            <TestimonialCard  testimony="Encomendei um bolo de aniversário e ficou perfeito. Todos os convidados elogiaram." rating={5} name="Fernanda Rocha" role="Cliente" />
            <TestimonialCard  testimony="Atendimento excelente e ambiente muito acolhedor. Parece que estamos em casa." rating={5} name="Ricardo Martins" role="Cliente" />
            <TestimonialCard  testimony="Os salgados são sempre frescos e saborosos. Ótima opção para o lanche da tarde." rating={5} name="Patrícia Gomes" role="Cliente" />
          </div>

        </section>

      </section>

      <section id="pricing">
        <div className="container">

          <header>
            <p className="desktop-only">
              Combos especiais
            </p>
            <h2>
              Escolha seu favorito
            </h2>
          </header>

          <section className="pricing-container">


            <div className="pricing-card">
              <span className="plan">
                <h3>Plano Café da manhã</h3>
                <p>Ideal para começar o dia com energia e muito sabor.</p>
              </span>
              <h2>R$ 19,90</h2>
              <Button text="Pedir agora" secondary />
              <span className="hr"></span>
              <div className="features">✔ Café fresco.</div>
              <div className="features">✔ 6 Pães Franceses.</div>
              <div className="features">✔ Manteiga ou Requijão.</div>
            </div>

            <div className="pricing-card premium">
              <span className="bonus">
                <p>MAIS PEDIDO</p>
              </span>
              <span className="plan">
                <h3>Combo Família</h3>
                <p>Perfeito para compartilhar com toda a família.</p>
              </span>
              <span className="price">
                <h2>R$ 49,90</h2>
              </span>
              <Button text="Pedir agora" />
              <span className="hr"></span>
              <div className="features">✔ 10 Pães Franceses</div>
              <div className="features">✔ 10 Pães de Queijo</div>
              <div className="features">✔ 1 Bolo Caseiro</div>
              <div className="features">✔ Café para acompanhar</div>
            </div>

            <div className="pricing-card">
              <span className="plan">
                <h3>Combo Aniversário</h3>
                <p>Tudo que você precisa para comemorar com a família e amigos.</p>
              </span>
              <span className="price">
                <h2>R$ 99,90</h2>
              </span>
              <Button text="Pedir Agora" secondary />
              <span className="hr"></span>
              <div className="features">✔ 1 Bolo de aniversário</div>
              <div className="features">✔ 100 Salgadinhos</div>
              <div className="features">✔ 1 Refrigerante 2L</div>
              <div className="features">✔ Velas inclusas</div>
            </div>

          </section>
        </div>
      </section>

      <section id="contato" className="container">
        <header className="contact-header">
          <p className="desktop-only">Envie sua dúvida</p>
          <h2>Entre em contato</h2>
          <p>
            Tem alguma dúvida sobre nossos produtos ou quer fazer um pedido especial?
            Manda uma mensagem que respondemos rapidinho! 🍞
          </p>
        </header>

        <div className="contact-form">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="contact-input"
          />
          <textarea
            placeholder="Motivo do contato. Ex: Gostaria de encomendar um bolo de aniversário..."
            className="contact-input contact-textarea"
          />
          <Button text="Enviar" />
        </div>
      </section>

      <footer id="contact">

        <div className="container footer-content">

          <div>
            <h3>🥖 Padaria da Carmen</h3>

            <p>
              Tradição, sabor e qualidade em cada receita.
            </p>
          </div>

          <div>
            <h4>Contato</h4>

            <p>📞 (45) 99999-9999</p>
            <p>📧 contato@padariadacarmen.com</p>
          </div>

          <div>
            <h4>Endereço</h4>

            <p>
              Avenida Brasil, 360<br />
              Anahy - PR
            </p>
          </div>

          <div>
            <h4>Horário</h4>

            <p>Seg - Sáb: 06h às 18h</p>
            <p>Dom: Fechado</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Padaria da Carmen - Todos os direitos reservados.
        </div>

      </footer>

    </>
  );
}