
const botaoComecar = document.getElementById("botaoComecar");

botaoComecar.addEventListener("click", function() {

    document.getElementById("declaracao").scrollIntoView({
        behavior: "smooth"
    });

});

// CRIAR ESTRELAS

const ceuEstrelado = document.getElementById("ceuEstrelado");

for (let i = 0; i < 100; i++) {

    const estrela = document.createElement("div");

    estrela.classList.add("estrela");

    estrela.style.left = Math.random() * 100 + "%";
    estrela.style.top = Math.random() * 100 + "%";

    estrela.style.animationDelay = Math.random() * 3 + "s";

    ceuEstrelado.appendChild(estrela);
}

// CORAÇÕES FLUTUANTES

function criarCoracao() {
    const coracao = document.createElement("div");

    coracao.classList.add("coracao");
    coracao.innerHTML = "💜";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (15 + Math.random() * 15) + "px";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 7000);
}

setInterval(criarCoracao, 1200);

// ANIMAÇÃO DE ENTRADA DOS CARTÕES

const cartoes = document.querySelectorAll(".cartao-mensagem");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("apareceu");
            observador.unobserve(entrada.target);
        }

    });

}, {
    threshold: 0.15
});

cartoes.forEach((cartao) => {
    observador.observe(cartao);
});

// CONTROLE DA MÚSICA

const musicaFundo = document.getElementById("musicaFundo");
const botaoMusica = document.getElementById("botaoMusica");

botaoMusica.addEventListener("click", function() {

    if (musicaFundo.paused) {

        musicaFundo.play();

        botaoMusica.innerHTML = "⏸ Pausar música 💜";

    } else {

        musicaFundo.pause();

        botaoMusica.innerHTML = "▶ Ouvir nossa música 💜";

    }

});

// CONTADOR DO NOSSO AMOR

const dataInicio = new Date(2026, 4, 31, 0, 0, 0);

function atualizarContador() {

    const agora = new Date();
    const diferenca = agora - dataInicio;

    if (diferenca < 0) return;

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);

// ABERTURA DO SITE

// ABERTURA DO SITE

const abertura = document.getElementById("abertura");
const botaoAbrir = document.getElementById("botaoAbrir");
const coracaoAbertura = document.querySelector(".coracao-abertura");

botaoAbrir.addEventListener("click", function() {

    botaoAbrir.disabled = true;

    coracaoAbertura.classList.add("pulso-final");

    setTimeout(() => {

        abertura.classList.add("saindo");

        setTimeout(() => {
            abertura.remove();
        }, 1000);

    }, 700);

});

// PARTÍCULAS DA ABERTURA

for (let i = 0; i < 35; i++) {

    const particula = document.createElement("div");

    particula.classList.add("particula");

    particula.style.left = Math.random() * 100 + "%";
    particula.style.top = Math.random() * 100 + "%";

    particula.style.animationDelay = Math.random() * 4 + "s";

    abertura.appendChild(particula);
}

// TRANSIÇÃO ENTRE AS SEÇÕES

const secoes = document.querySelectorAll(
    ".declaracao, .declaracao-amor, .galeria, .contador-amor, .final-amor"
);

const observadorSecoes = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("secao-visivel");
            observadorSecoes.unobserve(entrada.target);
        }

    });

}, {
    threshold: 0.1
});

secoes.forEach((secao) => {
    observadorSecoes.observe(secao);
});


const envelope = document.getElementById("envelope");
const botaoEnvelope = document.getElementById("botaoEnvelope");

let envelopeAberto = false;

function abrirEnvelope() {

    envelopeAberto = !envelopeAberto;

    if (envelopeAberto) {
        envelope.classList.add("aberto");
        botaoEnvelope.textContent = "Fechar cartinha 💜";
    } else {
        envelope.classList.remove("aberto");
        botaoEnvelope.textContent = "Abrir minha cartinha 💌";
    }

}

botaoEnvelope.addEventListener("click", abrirEnvelope);
envelope.addEventListener("click", abrirEnvelope);



function criarCoracoesEnvelope() {
    const simbolos = ["💜", "💕", "💗", "❤️"];

    for (let i = 0; i < 12; i++) {
        const coracao = document.createElement("span");

        coracao.classList.add("coracao-voando");
        coracao.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        coracao.style.setProperty(
            "--deslocamento",
            (Math.random() * 180 - 90) + "px"
        );

        coracao.style.animationDelay = (Math.random() * 0.5) + "s";

        envelope.appendChild(coracao);

        setTimeout(() => coracao.remove(), 2500);
    }
}

function abrirEnvelope() {
    envelopeAberto = !envelopeAberto;

    if (envelopeAberto) {
        envelope.classList.add("aberto");
        botaoEnvelope.textContent = "Fechar cartinha 💜";

        criarCoracoesEnvelope();
        criarParticulasEnvelope();
    } else {
        envelope.classList.remove("aberto");
        botaoEnvelope.textContent = "Abrir minha cartinha 💌";
    }
}

botaoEnvelope.addEventListener("click", abrirEnvelope);
envelope.addEventListener("click", abrirEnvelope);


function criarParticulasEnvelope() {
    for (let i = 0; i < 18; i++) {
        const particula = document.createElement("span");

        particula.classList.add("particula-envelope");

        particula.style.left = (15 + Math.random() * 70) + "%";
        particula.style.top = (20 + Math.random() * 60) + "%";

        particula.style.setProperty(
            "--x",
            (Math.random() * 160 - 80) + "px"
        );

        particula.style.setProperty(
            "--y",
            (Math.random() * 160 - 80) + "px"
        );

        particula.style.animationDelay = (Math.random() * 0.4) + "s";

        envelope.appendChild(particula);

        setTimeout(() => particula.remove(), 2200);
    }
}

