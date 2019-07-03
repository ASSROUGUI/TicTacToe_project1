


player_1='X';
player_2='O';
countCell=0; //cells nomber

const tables=document.querySelectorAll('.t');//t for table class
let turns=document.querySelector('h1');//shows who's turn next




function sound(){  //for sounds in the game
  var audio = new Audio();
  audio.src ="sound2.mp4";
  audio.play();

}

function clapSound(){  //for sounds in the game
  var audio = new Audio();
  audio.src ="sound1.mp4";
  audio.play();

}
let switchX_O=function(plyerNo1,plyerNo2){ //swich game between X,O players
    if(this.innerHTML!==player_1  && this.innerHTML !== player_2){
        if (countCell%2==0){ //to start with 1st player
            this.innerHTML = player_1;
           sound();
           countCell+=1;
    turns.innerText=player_2+"'s turn";
          }
          else {
            console.log(countCell);
            this.innerHTML=player_2;//to switch to 2nd player
            sound(); 
            countCell+=1;
           turns.innerText=player_1+"'s turn";
          }
              
}
checkTheWinner(player_1);
checkTheWinner(player_2);
// restartGame();
 }

 
 for (let i=0; i < tables.length;i++){
  tables[i].addEventListener('click',switchX_O);
}





function checkTheWinner(winner){//chech all the The possibilities to win


if(tables[2].innerText==winner&&tables[4].innerText==winner&&tables[6].innerText==winner){ wins(winner,2,4,6);}
if(tables[0].innerText==winner&&tables[1].innerText==winner&&tables[2].innerText==winner){wins(winner,0,1,2);}
if(tables[0].innerText==winner&&tables[4].innerText==winner&&tables[8].innerText==winner){wins(winner,0,4,8); }
if (tables[2].innerText==winner&&tables[5].innerText==winner&&tables[8].innerText==winner){wins(winner,2,5,8);  }
 if(tables[1].innerText==winner&&tables[4].innerText==winner&&tables[7].innerText==winner){wins(winner,1,4,7); }

if (tables[0].innerText==winner&&tables[3].innerText==winner&&tables[6].innerText==winner){wins(winner,0,3,6);  }
if (tables[3].innerText==winner&&tables[4].innerText==winner&&tables[5].innerText==winner){wins(winner,3,4,5); }
if(tables[6].innerText==winner&&tables[7].innerText==winner&&tables[8].innerText==winner){wins(winner,6,7,8); }
else if (countCell==9){swal(" It's a tie ").then(refreshtGame);}
}



function wins(winner,index1,index2,index3){//function wins if someone wins
  swal(winner+' wins').then(refreshtGame);
  tables[index1].classList += (" animated flipOutY infinite");
  tables[index2].classList += (" animated flipOutY infinite");
  tables[index3].classList += (" animated flipOutY infinite");
  clapSound(); // refreshtGame();
}


function refreshtGame(){
window.location.reload()

}
function restat(){
  for(let i=0;i<tables.length;i++){
    tables[i].innerHTML='';}
}
function X(){
  // restat();
  // switchX_O();
  // checkTheWinner();
}
function O(){
  restat();
  switchX_O(player_2,player_1);
  checkTheWinner();}
