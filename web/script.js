const tituloPortfolio = document.querySelector("#textoPortfolio");
const indicadorRolagem = document.querySelector(".rolar");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;
    const progresso = Math.min( scroll / 500, 1);

    if (tituloPortfolio) {

        const escala =  1 + progresso * 0.08;
        tituloPortfolio.style.transform =  `scale(${escala})`;
        tituloPortfolio.style.opacity =  1 - progresso;

    }

    if (indicadorRolagem) {
        indicadorRolagem.style.opacity =
            Math.max(
                0,
                1 - progresso * 4
            );

    }

});


const elementos =document.querySelectorAll (".aparecer");
const observer = new IntersectionObserver(

        (entradas) => {
            entradas.forEach( (entrada) => {
                    if ( entrada.isIntersecting) {
                        entrada.target
                          .classList
                          .add("ativo");
                    }

                }

            );

        },

        {
          threshold: 0.12
        }

    );

elementos.forEach(
    (elemento) => {
        observer.observe(
            elemento
        );

    }

);

const links = document.querySelectorAll('a[href^="#"]');

links.forEach( (link) => {

        link.addEventListener(

            "click",

            (evento) => {

                const id = link.getAttribute( "href" );

                if (
                    !id ||
                    id === "#"
                ) {

                    return;

                }

                const destino =  document.querySelector( id );

                if (destino) {
                  evento.preventDefault();
                  destino.scrollIntoView({ behavior: "smooth", block: "start"

                    });

                }

            }

        );

    }

);