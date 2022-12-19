//GUIDE TECH LEADS
function carregaGuide () {
    let biografias = {
        bio01: {nome:"Ada Lovelace", citacao: "A PRIMEIRA PROGRAMADORA DE TODOS OS TEMPOS", descricao:"Vinda da Inglaterra vitoriana, ela já demonstrava suas habilidades matemáticas nas máquinas calculadoras de Charles Babbage, um dos pioneiros da computação programável digital, que a chamava de encantadora dos números. Ela é considerada a fundadora da ciência da computação, assim como a primeira programadora do mundo. Lovelace foi visionária também ao entender conceitos de programação que seriam provados muito depois, como a capacidade que máquinas têm para manipular símbolos e não apenas números e por criar o primeiro algoritmo feito para ser processado por máquinas.", imagem: "https://i.postimg.cc/Hk5XT3HT/Ada-Lovelace.webp"},
        bio02: {nome:"Grace Hopper", citacao: "VOVÓ DO COBOL",  descricao:"A almirante Grace Murray Hopper desenvolveu linguagens de programação mais acessíveis, que usavam palavras e não números para funcionar. Assim, ela acabou criando o primeiro compilador para computadores, sendo a primeira linguagem que usava palavras, ao invés de números, como comandos. Hopper também foi a responsável por associar as palavras bug e debug a problemas de computadores depois de encontrar um inseto em uma máquina.", imagem: "https://i.postimg.cc/xdcqwrMW/Grace-Hopper.jpg"},
        bio03: {nome:"Hedy Lamarr", citacao: "A ATRIZ QUE INVENTOU A BASE PARA O WI-FI",  descricao:"Nascida na Áustria, Hedy Lamarr virou um dos maiores ícones do cinema, com uma beleza estonteante e ousadia. Em 1933, chocou o público conservador ao protagonizar uma cena de orgasmo feminino e aparecia nua no filme Êxtase, quando tinha apenas 18 anos. Além de conviver de perto com o alto comando nazista, Hedy foi praticamente “sequestrada” pelo marido controlador, que a impediu de trabalhar e a trancou em um de seus castelos. Como em um filme de ação, a atriz conseguiu escapar (literalmente) e fugir primeiro para a França e depois Inglaterra, onde foi apresentada ao dono da MGM, Louis B. Mayer. Hábil negociadora, conseguiu um salário maior que o originalmente oferecido e chegou em Hollywood em 1938, já com o novo sobrenome, Lamarr. Imediatamente foi anunciada como “a mais bela mulher do mundo”, mas é Hedy Lamarr, a cientista, que hoje permanece como seu título mais famoso. Ironicamente, sua criação foi um sofisticado aparelho de interferência em rádio para despistar  justamente radares nazistas.", imagem: "https://i.postimg.cc/TwJ74bhz/Hedy-Lamarr.webp"},
        bio04: {nome:"Joan Clarke", citacao: "A MULHER QUE AJUDOU A DECIFRAR O CÓDIGO SECRETO DOS NAZISTAS",  descricao:"Foi a primeira criptoanalista feminina do mundo e trabalhou no departamento britânico responsável por quebrar códigos na Segunda Guerra Mundial. Na verdade, Clarke foi contratada como linguista, pois à época não se admitia que uma mulher fosse criptoanalista. Assim, ela fez parte da equipe que construiu alguns dos primeiros computadores do mundo, que tinham como objetivo desvendar as mensagens criptografadas pela famosa máquina Enigma, pertencente aos alemães, durante a Segunda Guerra Mundial. Há quem diga que a guerra durou dois anos a menos, graças a essa conquista.", imagem: "https://i.postimg.cc/LXgY1dsz/Joan-Clarke.jpg"},
        bio05: {nome:"Margaret Hamilton", citacao: "CRIADORA DO PROGRAMA QUE LEVOU O HOMEM À LUA",  descricao:"Cientista da computação e engenheira de software, que ainda está na ativa, ela levou literalmente o homem à Lua. Ela foi diretora de engenharia de software do projeto responsável pelo código, que guiou o voo da missão Apollo 11. E ainda colheu frutos, pois o resultado desta façanha foi a inspiração e criação do código para o primeiro computador portátil da história.", imagem: "https://i.postimg.cc/76CzbyTJ/Margaret-Hamilton-png.png"},    
    };

    let content = document.getElementById("content");

    for (let bio in biografias) {
        content.innerHTML +=
        '<div class="cards">' +
        '<img src="' +
        biografias[bio].imagem +
        '"/>' +
        "<details>" +
        "<summary>" +
        biografias[bio].nome +
        "</summary>" +
        "<blockquote><q>" +
        biografias[bio].citacao +
        "</q></blockquote>" +
        "<p>" +
        biografias[bio].descricao +
        "</p>" +
        "</details>" +
        "</div>";
    }
}

carregaGuide();

// BUTTON TURN/DARK MODE
function dMode()
{
alert("Só temos opção Dark da força, logo você vai entender! HA-HA-HA!");
}

