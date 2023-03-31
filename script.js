const form = document.querySelector('form');
let question = document.querySelectorAll('#question');
let title = document.querySelector('.result h3');
let aide = document.querySelector('.aide');
let note = document.querySelector('.note');
let tab = [];
let tabVerif = [];
let answers = ['c', 'b', 'c', 'b', 'c'];
let emojis = ['✅️', '💯️', '😥️', '😱️', '✨','👀','😭','👎🏾','👍🏽', '👏️', '😀️', '😇️']
// let message = prompt("Veilez entrez votre prenom");

form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    
    for(let i = 1; i < 6; i++){
        tab.push(document.querySelector(`input[name = "q${i}"]:checked`).value);
    }
    VerifQuizz(tab);
    tab = [];
})

function VerifQuizz(tab){
    for(let a = 0; a < 5; a++){
        if(tab[a] === answers[a]){
            tabVerif.push(true);
        }
        else{
            tabVerif.push(false);
        }
    }
    AffficheResult(tabVerif);
    Colors(tabVerif);
    tabVerif = [];
}

function AffficheResult(tabVerif){
    const ReponseVraie = tabVerif.filter(el => el === true).length;
    switch(ReponseVraie){
        case 0 :
                note.innerHTML = `0/5 ${emojis[6]}`;
                title.innerHTML = `${emojis[3]} Désolé vous ne connaissez rien sur le Togo ${emojis[3]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 1 :
                note.innerHTML = `1/5 ${emojis[7]}`;
                title.innerHTML = `${emojis[2]} Vous pouvez mieux faire ${emojis[2]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge"; 
        break;
        case 2 :
                note.innerHTML = `2/5 ${emojis[7]}`;
                title.innerHTML = `${emojis[5]} Il reste encore quelques erreurs à éviter ${emojis[5]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 3 : 
                note.innerHTML = `3/5 ${emojis[8]}`;
                title.innerHTML = `${emojis[11]} Encore un effort ${emojis[11]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 4:
                note.innerHTML = `4/5 ${emojis[8]}`;
                title.innerHTML = `${emojis[10] + emojis[4]}  Vous y êtes presque ${emojis[10] + emojis[4]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant la case en rouge";
        break;
        case 5:
                note.innerHTML = `5/5 ${emojis[0]}`;
                title.innerHTML = `${emojis[9] + emojis[1]} Félicitaiton vous avez tout trouvé ${emojis[1] + emojis[9]}`;
                aide.innerHTML = ' Veillez Cliquer sur Niveau 2'
                // aide.innerHTML = "🥳 Bravo Mm/Mr " +'<b>' + message + '<b>' + " 🥰";
               sub = document.querySelector('#submit');
               sub.innerHTML = '<a href="quizz2.html">Niveau 2</a>'
               sub.classList.add('level');
        break;
    }
}

function Colors(tabVerif){
    for(let x = 0; x < tabVerif.length; x++){
        if(tabVerif[x] === true){
            question[x].style.background = '#4efa7b';
        }
        else{
            question[x].style.backgroundColor = '#f15b5e';
            question[x].classList.add('echec');
        }
        setTimeout(() => {
            question[x].classList.remove('echec');
            
        }, 500);
    }
}

    question.forEach(el => {
        el.addEventListener('click', ()=>{
            el.style.backgroundColor = '#8E24B426';
        })
        
    });



/*
// how to send emails with mailgun nodejs ? */