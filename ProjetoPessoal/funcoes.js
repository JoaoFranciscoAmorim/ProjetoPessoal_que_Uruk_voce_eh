var perguntaum = 1;
var perguntadois = 1;
var perguntatres = 1;
var perguntaquatro = 1;
var perguntacinco = 1;
var perguntaseis = 1;
var perguntasete = 1;
var perguntaoito = 1;
var somatudo = 0;

function funcUm () {
    if (document.getElementById('qumum').checked) {
        perguntaum = (document.getElementById('qumum')).value
    } else if (document.getElementById('qumdois').checked) {
        perguntaum = (document.getElementById('qumdois')).value
    } else if (document.getElementById('qumtres').checked) {
        perguntaum = (document.getElementById('qumtres')).value
    }
    return perguntaum;
}
function funcDois () {
    if (document.getElementById('qdoisum').checked) {
        perguntadois = (document.getElementById('qdoisum')).value
    } else if (document.getElementById('qdoisdois').checked) {
        perguntadois = (document.getElementById('qdoisdois')).value
    } else if (document.getElementById('qdoistres').checked) {
        perguntadois = (document.getElementById('qdoistres')).value
    }
    return perguntadois;
}
function funcTres () {
    if (document.getElementById('qtresum').checked) {
        perguntatres = (document.getElementById('qtresum')).value
    } else if (document.getElementById('qtresdois').checked) {
        perguntatres = (document.getElementById('qtresdois')).value
    } else if (document.getElementById('qtrestres').checked) {
        perguntatres = (document.getElementById('qtrestres')).value
    }
    return perguntatres;
}
function funcQuatro () {
    if (document.getElementById('qquatroum').checked) {
        perguntaquatro = (document.getElementById('qquatroum')).value
    } else if (document.getElementById('qquatrodois').checked) {
        perguntaquatro = (document.getElementById('qquatrodois')).value
    } else if (document.getElementById('qquatrotres').checked) {
        perguntaquatro = (document.getElementById('qquatrotres')).value
    }
    return perguntaquatro;
}
function funcCinco () {
    if (document.getElementById('qcincoum').checked) {
        perguntacinco = (document.getElementById('qcincoum')).value
    } else if (document.getElementById('qcincodois').checked) {
        perguntacinco = (document.getElementById('qcincodois')).value
    } else if (document.getElementById('qcincotres').checked) {
        perguntacinco = (document.getElementById('qcincotres')).value
    }
    return perguntacinco;
}
function funcSeis () {
    if (document.getElementById('qseisum').checked) {
        perguntaseis = (document.getElementById('qseisum')).value
    } else if (document.getElementById('qseisdois').checked) {
        perguntaseis = (document.getElementById('qseisdois')).value
    } else if (document.getElementById('qseistres').checked) {
        perguntaseis = (document.getElementById('qseistres')).value
    }
    return perguntaseis;
}
function funcSete () {
    if (document.getElementById('qseteum').checked) {
        perguntasete = (document.getElementById('qseteum')).value
    } else if (document.getElementById('qsetedois').checked) {
        perguntasete = (document.getElementById('qsetedois')).value
    } else if (document.getElementById('qsetetres').checked) {
        perguntasete = (document.getElementById('qsetetres')).value
    }
    return perguntasete;
}
function funcOito () {
    if (document.getElementById('qoitoum').checked) {
        perguntaoito = (document.getElementById('qoitoum')).value
    } else if (document.getElementById('qoitodois').checked) {
        perguntaoito = (document.getElementById('qoitodois')).value
    } else if (document.getElementById('qoitotres').checked) {
        perguntaoito = (document.getElementById('qoitotres')).value
    }
    return perguntaoito;
}
function ret () {
    somatudo = Number(perguntaum) + Number(perguntadois) + Number(perguntatres) + Number(perguntaquatro) + Number(perguntacinco) + Number(perguntaseis) + Number(perguntasete) + Number(perguntaoito)
    if (somatudo >= 8 && somatudo <= 10) {
        document.getElementById('oculos').src ='imagens/bardo.png'
    } else if (somatudo >= 11 && somatudo <= 12) {
        document.getElementById('oculos').src ='imagens/gagueira.png'
    } else if (somatudo >= 13 && somatudo <= 14) {
        document.getElementById('oculos').src ='imagens/lancas.png'
    } else if (somatudo >= 15 && somatudo <= 16) {
        document.getElementById('oculos').src ='imagens/gastronomico.png'
    } else if (somatudo >= 17 && somatudo <= 18) {
        document.getElementById('oculos').src ='imagens/semvergonha.png'
    } else if (somatudo >= 19 && somatudo <= 20) {
        document.getElementById('oculos').src ='imagens/indestrutivel.png'
    } else if (somatudo >= 21 && somatudo <= 22) {
        document.getElementById('oculos').src ='imagens/espiritual.png'
    } else {
        document.getElementById('oculos').src ='imagens/aranhas.png'
    }
    return somatudo;
}