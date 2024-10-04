document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll(".small-box");
    var turn = "X";
    var isGameOver = false;

   
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].addEventListener("click",function(){
           

            boxes[i].innerHTML=turn;
            checkWin();
            checkDraw();
            ChangeTurn();
        });
    }
 
    function ChangeTurn(){
        if(turn === "X"){
            turn="O";
            document.querySelector("#helo").innerHTML="turn-"+turn;
        }else{
            turn="X";
            document.querySelector("#helo").innerHTML="turn-"+turn;
        }
    }

    function checkWin(){
        var winCondition=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];

        for(let i=0;i<winCondition.length;i++){
            let v0=boxes[winCondition[i][0]].innerHTML;
            let v1=boxes[winCondition[i][1]].innerHTML;
            let v2=boxes[winCondition[i][2]].innerHTML;


            if(v0 != ""&&v0===v1 && v0===v2){
                isGameOver=true;
                document.querySelector("#results").innerHTML=turn+"Win";
            }



        }
    }


    function checkDraw(){
        if(!isGameOver){
            let isDraw=true;
          

            for (let i = 0; i < boxes.length; i++) {
                if(boxes[i].innerHTML === ""){
                    isDraw=false;
                } 
            }

            

            if (isDraw) {
                isGameOver = true; 
                document.querySelector("#results").innerHTML = "It's a draw!"; // Show draw message
            }
        }
    }

    document.querySelector("#play-again").addEventListener("click", function() {
       isGameOver=false;
        turn = "X";
        
     
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = ""; 
        }
        
      
        document.querySelector("#results").innerHTML = ""; 
        document.querySelector("#helo").innerHTML="TIK TAK TOE";
    });


   
});
