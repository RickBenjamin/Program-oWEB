import { useState } from "react";

import Button from "../components/Button";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";

export default function Home() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="container py-sm">

        <nav className="flex items-center justify-between">

          <h1>{/* aqui vai imagem */}</h1>

          <div className="desktop-only">

            <ul className="flex gap-1">

              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#solution">Soluções</a>
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

            </ul>

          </div>

          <div className="desktop-only">

            <div className="flex items-center">

              <a className="reverse-color ml-lg" href="#">
                Login
              </a>

              <Button text="Cadastre-se" />

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
                      <a href="#solution">Soluções</a>
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
            Olá
          </p>

          <h1>
            Comida de mãe direto no seu apê,
            é só pedir que entregamos para você!
          </h1>

          <p>
            Já pensou em matar a saudade daquela comida caseira?
            O melhor de tudo, nossas receitas são 100% saudáveis.
          </p>

          <div className="flex gap-1">

            <span>
              <Button text="Cadastre-se" />
            </span>

            <span className="desktop-only">
              <Button
                text="Veja mais"
                secondary
              />
            </span>

          </div>

        </div>

      </section>


    </>
  );
}