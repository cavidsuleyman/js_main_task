window.addEventListener("load",function(){

    const _myName=document.querySelector("#myName");
    const _myPoint=document.querySelector("#myPoint");
    const _botName=document.querySelector("#botName");
    const _botPoint=document.querySelector("#botPoint");
    const _rock=document.querySelector("#rock");
    const _paper=document.querySelector("#paper");
    const _scissor=document.querySelector("#scissor");
    const _msg=document.querySelector("#msg");

    var status=true;
    var myPoint=0;
    var botPoint=0;
    var myObj="";
    var botObj="";
    const time=3000;
    const obj=["rock","paper","scissor"];
    const game={
        "rock":"scissor",
        "paper":"rock",
        "scissor":"paper"
    };

    _myName.innerText=window.prompt("Write your name:") || "User1";
    _botName.innerText="My Bot";
    _myPoint.innerText=myPoint;
    _botPoint.innerText=botPoint;
    _msg.innerText=`${_myName.innerText} make a choice`;

    _rock.addEventListener("click",function(){
        if(status){
            myObj=obj[0];
            status=false;
            _rock.classList.add("choose");
            _msg.innerText=`${_botName.innerText} make a choice`;
            window.setTimeout(myBot,time);
        }
    });
    _paper.addEventListener("click",function(){
        if(status){
            myObj=obj[1];
            status=false;
            _paper.classList.add("choose");
            _msg.innerText=`${_botName.innerText} make a choice`;
            window.setTimeout(myBot,time);
        }
    });
    _scissor.addEventListener("click",function(){
        if(status){
            myObj=obj[2];
            status=false;
            _scissor.classList.add("choose");
            _msg.innerText=`${_botName.innerText} make a choice`;
            window.setTimeout(myBot,time);
        }
    });

    function myBot(){
        let index=Math.round(Math.random()*(obj.length-1));
        botObj=obj[index];
      
        if(game[botObj]==myObj){
            _botPoint.innerText= ++botPoint;
            _msg.innerText=`${_botName.innerText} win`;

        }
        else if(game[myObj]==botObj){
            _myPoint.innerText= ++myPoint;
            _msg.innerText=`${_myName.innerText} win`;
        }
        else{
            _msg.innerText=`Nobody won`;
        }
        
        window.setTimeout(function(){

            _rock.classList.remove("choose");
            _paper.classList.remove("choose");
            _scissor.classList.remove("choose");
            status=true;
            _msg.innerText=`${_myName.innerText} make a choice`;
        },time);

    }


});