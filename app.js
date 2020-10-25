/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var score,roundscore, activeplayer,flag,dice ,maxscore;
flag = 0;
document.querySelector('.dice').style.display = 'none';
maxscore = 200 ;  // default maxscore is 200

roundscore = 0;
score = [0,0];

activeplayer = Math.floor(Math.random()*2);  // want players chosen from 0 and 1;
if (activeplayer === 1){
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('#box0').style.display = 'none';

}
else{
    document.querySelector('#box1').style.display = 'none';
}





/*
activeplayer=0;
dice = Math.floor(Math.random() * 6) + 1 ;// put it in an event listener
console.log(dice);
document.querySelector('#current-'+activeplayer).textContent = dice ;
document.querySelector('#current-'+activeplayer).innerHTML = '<em>' +dice + '</em>';

var x = document.querySelector('#current-'+activeplayer).textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none' ;

*/

document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice,player_score;
    dice = Math.floor(Math.random() * 6) + 1 ; 
    player_score = document.querySelector('#current-'+activeplayer);
    var dicepic = document.querySelector('.dice');
    dicepic.src = 'dice-' + dice +'.png';
    
    

    if (flag === 0){
        roundscore = 0;
        flag = 1;
    }

    
    if(dice != 1){
        
        dicepic.style.display = 'block';
        roundscore = dice + roundscore;
       // score[activeplayer] = score[activeplayer] + dice;
        
        
        player_score.innerHTML = roundscore;
        if ((score[activeplayer] + roundscore) > maxscore){
            
            document.querySelector('#score-'+activeplayer).innerHTML = score[activeplayer] + roundscore;
            document.querySelector("#l1").innerHTML = 'Winner is Player '+(activeplayer+1);
            document.querySelector("#l2").innerHTML = 'Play Again ';
            document.querySelector('.btn-roll').style.display= 'none';
            document.querySelector('.btn-hold').style.display= 'none';

            document.querySelector("#messagebox").style.display = 'block';
            //newgame();

            document.querySelector("#maxscore").style.display = 'block' ; 
            document.querySelector('.submit').style.display = 'block'
            document.querySelector('.isheader').innerHTML = "Set Max Score" ;
            
        }

    } 
    else{
        roundscore = 0;
        
        

        updateplayer();
    }
   
});

function setscore(){
    var x = document.querySelector("#maxscore").value ;
    maxscore= x;

}

function newgame(){



    
    document.querySelector("#maxscore").style.display = 'none' ; 
    document.querySelector('.submit').style.display = 'none'
    document.querySelector('.isheader').innerHTML = "Max Score: "+maxscore ;



        document.querySelector('.btn-roll').style.display= 'block';
        document.querySelector('.btn-hold').style.display= 'block';
  

        alert("starting a new game");
        flag = 0;
        document.querySelector('#score-1').innerHTML = 0;
        document.querySelector('#score-0').innerHTML = 0;
        document.querySelector('#current-0').innerHTML = 0;
        document.querySelector('#current-1').innerHTML = 0;
        
        document.querySelector("#messagebox").style.display = 'block';
        document.querySelector("#l1").innerHTML = "Let's Play";
        document.querySelector("#l2").innerHTML = 'Glory Awaits';
    
    
    roundscore = 0;
    score = [0,0];
    activeplayer = Math.floor(Math.random()*2);  // want players chosen from 0 and 1;
    document.querySelector('.dice').style.display = 'none';

    if (activeplayer === 1){
        document.querySelector('.player-0-panel').classList.remove('active'); 
        document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('#box0').style.display = 'none';
        document.querySelector('#box1').style.display = 'block';



    }
    else{
        document.querySelector('.player-1-panel').classList.remove('active'); 
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('#box1').style.display = 'none';
        document.querySelector('#box0').style.display = 'block';


    }
    



    
}

function updateplayer(){
    
    flag = 0;
    document.querySelector('.dice').style.display = 'none';
    score[activeplayer] = score[activeplayer] + roundscore;
    document.querySelector('#score-'+activeplayer).innerHTML = score[activeplayer] ;
    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    document.querySelector('#current-'+activeplayer).innerHTML = 0 ;
    document.querySelector('#box'+activeplayer).style.display = 'none';


    activeplayer = (activeplayer + 1) % 2;
    document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
    
    document.querySelector('#box'+activeplayer).style.display = 'block';
    document.querySelector("#messagebox").style.display = 'block';


    

}

document.querySelector('.btn-new').addEventListener('click',newgame);

document.querySelector('.btn-hold').addEventListener('click',updateplayer);




