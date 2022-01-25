window.addEventListener('load',allot());

function allot(){
    var buttons = document.querySelectorAll('button');
    var player = true;

    for(var idx=0 ; idx<buttons.length ; idx++)
    {
       buttons[idx].addEventListener('click',function(event){
            if(event.target.innerText ==='')
            {
                if(player){
                event.target.innerText = "O";
                player = false;
                }

                else{
                    event.target.innerText = "X";
                    player = true;
                }

            }   
                
        });

        if(result(idx,idx))
        {
            var spantag = document.querySelector('span');
            if(player)
            {
                spantag.innerText = "player 1";
            }
            else{
                spantag.innerText = "player 2";
            }
        }

        



            
    }
    
}


