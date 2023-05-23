let list_mails = ['ale50@gmail.com', 'giovi78@gmail.com', 'samu901@libero.it', 'giusy-frog@hotmail.com', 'lolli.pop1@gmail.com', 'sansone87@libero.it', 'sassolini-bianco@libero.it', 'cornetto@hotmail.com']
let mail = prompt(' Inserisci la tua mail');
let email_found = false;

for(let i=0; i<list_mails.length; i++){
    if(mail === list_mails[i]){
       email_found=true;
    }
    if(email_found){
        console.log('Mail trovata');
    }else{
        console.log('Mail non trovata');
    }
    
}