let player =Math.floor(Math.random()* 6 + 1);
console.log(player);
let computer =Math.floor(Math.random()* 6 + 1);
console.log(computer);

if(player> computer){
    console.log('HAI VINTO PLAYER');
    }else if(computer>player){
        console.log('HAI VINTO COMPUTER');
    }
    else{
        console.log('PARI');
    }
