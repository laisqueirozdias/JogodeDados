const Botton01 = document.getElementById("botao01");
const text01 = document.getElementById("texto01");
const Botton02 = document.getElementById("botao02");
const text02 = document.getElementById("texto02");
const resultado = document.getElementById("resultado");
const btreiniciar = document.getElementById("reiniciar")
let rodada = 0;
let vitoriadado01 = 0;
let vitoriadado02 = 0;
Botton02.disabled = true;
let dado01 = null;
let dado02 = null;

function reiniciar() {
  rodada = 0;
  vitoriadado01 = 0;
  vitoriadado02 = 0;
  Botton01.disabled = false;
  Botton02.disabled = true;
  dado01 = null;
  dado02 = null;
  resultado.innerHTML = "";
  text01.innerHTML = "Dado 01"
  text02.innerHTML = "Dado 02";
}

function btJogarDado01() {
  dado01 = Math.floor(Math.random() * 6) + 1;
  text01.innerHTML = dado01;
  Botton02.disabled = false;
  Botton01.disabled = true;
}

function btJogarDado02() {
  dado02 = Math.floor(Math.random() * 6) + 1;
  text02.innerHTML = dado02;
  Botton01.disabled = false;
  Botton02.disabled = true;  
  rodada++;

if (dado01 > dado02){
  vitoriadado01++;
  resultado.innerHTML = "Jogador 01 Ganhou a Rodada " + rodada;
}

else if (dado01 < dado02){
  vitoriadado02++;
  resultado.innerHTML = "Jogador 02 Ganhou a Rodada " + rodada;
}

else{
  resultado.innerHTML = "Empate"
}

if (rodada === 10){

Botton01.disabled = true;
Botton02.disabled = true;  
  if (vitoriadado01 > vitoriadado02){
    resultado.innerHTML = "Jogador 01 Ganhou "
  }

  if (vitoriadado02 > vitoriadado01){
    resultado.innerHTML = "Jogador 02 Ganhou "
  }

}} 


Botton01.onclick = btJogarDado01;
Botton02.onclick = btJogarDado02;
btreiniciar.onclick = reiniciar;