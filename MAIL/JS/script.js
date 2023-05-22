let list_mails = ['ale50@gmail.com', 'giovi78@gmail.com', 'samu901@libero.it', 'giusy-frog@hotmail.com', 'lolli.pop1@gmail.com', 'sansone87@libero.it', 'sassolini-bianco@libero.it', 'cornetto@hotmail.com']
let mail = prompt(' Inserisci la tua mail');
let message = '';
for(let i=0; i<list_mails.length; i++){
    if(list_mails[i] === mail){
        message =('Mail trovata');
        console.log(message);
    }
    else{
        message =('Mail non trovata');
        console.log(message);
    }
}