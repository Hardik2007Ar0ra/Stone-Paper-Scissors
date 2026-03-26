let user=0;
let comp=0;

// isko better krna ho to khud dekh sakte ho
// basic code sahi chlra hai, just loose ya win pe kuch styling change krni ho wagera wo ni kiya


// console.log("choice was", userchoice);
        // let randomchoice = Math.floor(Math.random() * 3) + 1; // it gives 1->stone, 2->paper, 3->scissors
        // if(userchoice=="stone"){
        //     if(randomchoice==2){
        //         compscore++;
        //     }
        //     else if(randomchoice==3){
        //         userscore++;
        //     }
        //     else{
        //         console.log("Draw");
        //     }
        //     console.log("userscore", userscore);
        //     console.log("compscore",compscore);
        // }
        // else if(userchoice=="paper"){
        //     if(randomchoice==3){
        //         compscore++;
        //     }
        //     else if(randomchoice==1){
        //         userscore++;
        //     }
        //     else{
        //         console.log("Draw");
        //     }
        //     console.log("userscore", userscore);
        //     console.log("compscore",compscore);
        // }
        // else{
        //     if(randomchoice==1){
        //         compscore++;
        //     }
        //     else if(randomchoice==2){
        //         userscore++;
        //     }
        //     else{
        //         console.log("Draw");
        //     }
        //     console.log("userscore", userscore);
        //     console.log("compscore",compscore);
        // }

const choices=document.querySelectorAll(".choice");

const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

const gencompchoice=()=>{
    let arr=["rock","paper","scissor"];
    const randind=Math.floor(Math.random()*3);
    return arr[randind];
}

const msg=document.querySelector("#message");

const showwinner=(userwin)=>{
    if(userwin){
        msg.innerText= "You Win";
        user++;
        userscore.innerText=user;
    }
    else{
        msg.innerText= "You Loose";
        comp++;
        compscore.innerText=comp;
    }
}

const playgame =(userchoice)=>{
    console.log("user choice =", userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice =", compchoice);

    if(userchoice===compchoice){
        msg.innerText="Draw";
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin= compchoice==="scissor"?false:true;
        }
        else{
            userwin= compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})