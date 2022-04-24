var data = [
    { 
        "canal": "Ana Maria Brogui",
        "url": "https://www.youtube.com/c/anamariabrogui/featured",
        "image": "canal1.jpg",
        "description": "Ana Maria Brogui é o primeiro programa de culinária do Youtube Brasil. Apresentado por Caio Novaes!"
    },
    { 
        "canal": "Receitas de Minuto por Gi Souza",
        "url": "https://www.youtube.com/channel/UCocWRG-uTqtvLUzGJI2seXQ",
        "image": "canal2.jpg",
        "description": "Receitas Rápidas e Práticas para quem não gosta de complicação! Aqui você aprende todo tipo de receitas ensinadas de forma simples"
    },
    { 
        "canal": "Panelaterapia",
        "url": "https://www.youtube.com/channel/UCML-bGXvFJmd898SbIVgDoA",
        "image": "canal3.jpg",
        "description": "Semanalmente publicamos pelo menos 2 novos vídeos com receitas fáceis, saborosas, rápidas e com ingredientes possíveis"
    },
    { 
        "canal": "Presunto Vegetariano",
        "url": "https://www.youtube.com/user/PresuntoVegetariano/featured",
        "image": "canal4.jpg",
        "description": "O Presunto Vegetariano é um canal onde você pode encontrar receitas vegetarianas e veganas, tanto salgadas quanto doces, rápidas, práticas, nutritivas e saudáveis."
    },
    { 
        "canal": "Rolê Gourmet",
        "url": "https://www.youtube.com/channel/UCQMDYlEFnk8jwwCADkHHsnQ",
        "image": "canal5.jpg",
        "description": "Rolê Gourmet está de volta!"
    },
    { 
        "canal": "Frigideira com Tampa Juliana Reis",
        "url": "https://www.youtube.com/channel/UCV3YLIeB_aCFEV0aA_g8usw/featured",
        "image": "canal6.jpg",
        "description": "Sou a Juliana Reis e venho trazer ótimas receitas curtas e bem objetivas para você que ama culinária assim como eu"
    },
    { 
        "canal": "Tasty Demais",
        "url": "https://www.youtube.com/channel/UCB0cIRr6cEkpzxtm3KTV3uw",
        "image": "canal7.jpg",
        "description": "Tasty, agora em português"
    },
    { 
        "canal": "Marina Morais",
        "url": "https://www.youtube.com/channel/UCMjA3OHuJJNA5IcMX5r4UDg",
        "image": "canal8.jpg",
        "description": "Bem-vindo ao meu canal! Meu nome é Marina Morais, sou nutricionista e cozinheira!"
    },
    { 
        "canal": "Larica Vegana",
        "url": "https://www.youtube.com/user/thebbbia/videos",
        "image": "canal9.jpg",
        "description": "Seja vegano, gostoso demais!!!"
    }, 
]

document.addEventListener("DOMContentLoaded", function(e) {
    var canal = getQueryCanal();
    var canalData = getCanalData(canal);
    updatePageCanalInfo(canalData)    
});

function getQueryCanal() {
    const currentUrl = window.location.href;
    var query = currentUrl.split("?")[1]
    var params = new URLSearchParams(query);
    return params.get("canal");
}

function getCanalData(canal) {
    return data[canal-1]
}

function updatePageCanalInfo(canalData) {
    document.getElementById("canalTitle").innerHTML = canalData.canal
    document.getElementById("canalDescription").innerHTML = canalData.description
    document.getElementById("btnWatch").href = canalData.url
    document.querySelector(".canal-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,100)), url('/img/" + canalData.image + "')"
}