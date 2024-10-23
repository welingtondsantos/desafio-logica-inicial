//Declarando variáveis

let nomeDoHeroi = "Cerrote"

//Recebendo nível de XP do Player
let nivelXp = 50000


//Utilizando Estrutura Condição
//Se XP for menor do que 1.000 = Ferro
if (nivelXp <= 1000){
    console.log ("O Herói de nome "+nomeDoHeroi+ " está no nível de Ferro");
}
//Se XP for entre 1.001 e 2.000 = Bronze
else if (nivelXp <= 2000){
    console.log("O Herói de nome " +nomeDoHeroi+ " está no nível de Bronze");
}
//Se XP for entre 2.001 e 5.000 = Prata
else if (nivelXp <= 5000){
    console.log("O Herói de nome " +nomeDoHeroi+ " está no nível de Prata");
}
//Se XP for entre 5.001 e 7.000 = Ouro
else if (nivelXp <= 7000){
    console.log("O Herói de nome " +nomeDoHeroi+ " está no nível de Ouro");
}
//Se XP for entre 7.001 e 8.000 = Platina
else if (nivelXp <= 8000){
    console.log("O Herói de nome " +nomeDoHeroi+ " está no nível de Platina");
}
//Se XP for entre 8.001 e 9.000 = Ascendente
else if (nivelXp <= 9000){
    console.log("O Herói de nome " +nomeDoHeroi+ " está no nível de Ascendente");
}
//Se XP for entre 9.001 e 10.000= Imortal
else if (nivelXp <= 10000){
    console.log("O Herói de nome " +nomeDoHeroi+ " está no nível de Imortal");
}
//Se XP for maior ou igual a 10.001 = Radiante
else{
    console.log("O Herói de nome " +nomeDoHeroi+ " está no nível de Radiante");
}