import * as readline from 'readline';

const input = require("readline-sync");

/* VELOCIDADE MÉDIA - Leia uma distância (em quilômetros) e o tempo transcorrido (em horas).
Calcule e retorne a velocidade média atingida. Justifique o que acontece se o tempo digitado for zero. */

let distancia: number = 0,
    tempo: number = 0,
    velocidadeMedia: number = 0;

distancia = input.questionFloat("\nDigite a distância percorrida em quilômetros: ");
tempo = input.questionFloat("Digite o tempo transcorrido em horas: ")

velocidadeMedia = distancia / tempo;

console.log("A velocidade média é: ", velocidadeMedia+"km/h");

