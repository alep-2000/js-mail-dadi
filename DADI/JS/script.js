let player = Math.random()* 6 + 1;
console.log(player);
let computer = Math.random()* 6 + 1;
console.log(computer);

if(player> computer){
    console.log('HAI VINTO PLAYER');
    console.log('HAI PERSO COMPUTER')
}else{
    console.log('HAI VINTO COMPUTER');
    console.log('HAI PERSO PLAYER');
}