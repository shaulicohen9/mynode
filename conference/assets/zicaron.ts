function qs(cssStr:string): HTMLElement {
    return document.querySelector(cssStr) as HTMLElement;
}
//=====================
window.addEventListener('scroll',f4)
function f4() {
  if(window.scrollY>300) {
    qs("#window1").style.top= "0px";
  }
  else {
    qs("#window1").style.top= "-60px";
  }
}
//======================
const lisitp:any[] = [
    {
        name: "שבילי" , source: "./ספרי הבשם/שבילי הבשם.jpg" , used: false
    },
    {
        name: "רננות" , source: "./ספרי הבשם/רננות הגשם.jpg" , used: false
    },
    {
        name: "ירקות" , source: "./ספרי הבשם/ריקוד הירקות.gif" , used: false
    },
    {
        name: "רזי" , source: "./ספרי הבשם/רזי הבשם.jpg" , used: false
    },
    {
        name: "רבבות" , source: "./ספרי הבשם/רבבות הגשם.jpg" , used: false
    },
    {
        name: "צ.מרפא" , source: "./ספרי הבשם/צ.מרפא הבשם.jpg" , used: false
    },
    {
        name: "פרחי" , source: "./ספרי הבשם/פרחי הבשם.jpg" , used: false
    },
    {
        name: "ערוגה" , source: "./ספרי הבשם/ערוגת הבשם.jpg" , used: false
    },
    {
        name: "נתיבי" , source: "./ספרי הבשם/נתיבי הבשם.jpg" , used: false
    },
    {
        name: "נצח" , source: "./ספרי הבשם/נצח הבשם.jpg" , used: false
    },
    {
        name: "ניצוצות" , source: "./ספרי הבשם/ניצוצות הגשם.jpg" , used: false
    },
    {
        name: "מרפא" , source: "./ספרי הבשם/מרפא הבשם.jpg" , used: false
    },
    {
        name: "מעיינות" , source: "./ספרי הבשם/מעיינות הגשם.jpg" , used: false
    },
    {
        name: "מאור" , source: "./ספרי הבשם/מאור הבשם.jpg", used: false
    },
    {
        name: "כיפי" , source: "./ספרי הבשם/כיפי הכיפה.gif" , used: false
    },
    {
        name: "כיסופי" , source: "./ספרי הבשם/כיסופי הבשם.jpg", used: false
    },
    {
        name: "ישועות" , source: "./ספרי הבשם/ישועות הגשם.jpg" , used: false
    },
    {
        name: "הגיגי" , source: "./ספרי הבשם/הגיגי הבשם.jpg" , used: false
    },
    {
        name: "הגדה" , source: "./ספרי הבשם/הגדת הבשם.jpg" , used: false
    },
    {
        name: "דרכי" , source: "./ספרי הבשם/דרכי הבשם.jpg" , used: false
    },    
    {
        name: "ברכה" , source: "./ספרי הבשם/ברכת הגשם.jpg" , used: false
    },    
    {
        name: "אוצרות" , source: "./ספרי הבשם/אוצרות הגשם.jpg" , used: false
    },    
    {
        name: "אהבה" , source: "./ספרי הבשם/אהבת הבשם.jpg" , used: false
    },    
    {
        name: "אביב" , source: "./ספרי הבשם/אביב הבשם.jpg" , used: false
    }
]
let tryCounter:number = 0;
let myScore:number = 0;
let pickedCardsName:string[] = []; 
let pickedCardsID:string[] = []; 
let cardsWon:any = [];
let dangerousRandomNumber = Math.floor(Math.random() * lisitp.length);
let danger:String=lisitp[dangerousRandomNumber].name;
let x:number;
//========================
function smallboard() {
    x= parseInt((qs("select") as HTMLSelectElement).value) ;
    let cardArray = [];
    let i:number
    for (i = 0; i < x / 2; i++) {
        let randomnum = Math.floor(Math.random() * lisitp.length);
        while (lisitp[randomnum].used === true) { randomnum = Math.floor(Math.random() * lisitp.length); }
        cardArray.push(`<div  class="card"> <img  id="${randomnum}" name="${lisitp[randomnum].name}"  src="${lisitp[randomnum].source}" alt=""><label>${lisitp[randomnum].name}</label></div>`);  
        lisitp[randomnum].used = true;
    }
    cardArray=cardArray.concat(cardArray)
    while (lisitp[dangerousRandomNumber].used === true) { dangerousRandomNumber = Math.floor(Math.random() * lisitp.length); }
    cardArray.push(`<div class="card"> <img id="${dangerousRandomNumber}" name="${lisitp[dangerousRandomNumber].name}"  src="${lisitp[dangerousRandomNumber].source}" alt=""><label>${lisitp[dangerousRandomNumber].name}</label></div>`);
    shuffle(cardArray);
    var str = "";
    for(let curr of cardArray) {
        str += curr 
    }  
    qs("#gameBoard").innerHTML = str;
    //======================
    qs("#cardDanger").innerHTML= `   הקלף הנוסף שאין לו בן זוג  הוא    "${danger}"   `;   
    qs("#gameStart").innerHTML=`<button id="myBtn" onclick ="flipCards()" > לחץ להפוך את הקלפים </button>`;
}
// //=====================
function shuffle(array:string[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;  
}
//=====================
function flipCards() { 
    let y:any = document.querySelectorAll("img")
    for(let curr of y) {
        curr.setAttribute("keepsrc" , curr.getAttribute("src"));
        curr.setAttribute("src" , "תמונות/sun.jpg");
        curr.parentElement.childNodes[2].setAttribute("keepname",curr.parentElement.childNodes[2].innerHTML);
        curr.parentElement.childNodes[2].innerHTML="שאולי";
        curr.addEventListener('click', flipCard) 
    }
    // qs("#myBtn").disabled = true;
    qs("#myBtn").style.visibility="hidden";
}
// =====================
function flipCard(this: any) {
    let cardID = this.getAttribute('id');
    this.setAttribute('src', lisitp[cardID]['source']);   
    this.parentElement.childNodes[2].innerHTML=`${lisitp[cardID]['name']}`;   
    this.removeEventListener('click', flipCard); 
    pickedCardsName.push(lisitp[cardID]['name'])
    console.log(pickedCardsName);
    pickedCardsID.push(cardID);
    checkForDanger()
    if (pickedCardsName.length === 2){
        tryCounter++;
        setTimeout(checkMatches, 250);
    }
}
//=====================
function checkForDanger(){
    if((pickedCardsName[0]===danger) || (pickedCardsName[1]===danger)){
            let y:any = document.querySelectorAll("img")
            for(let curr of y) { 
            curr.removeEventListener('click', flipCard); 
            curr.parentElement.childNodes[2].innerHTML=`${danger}`;
            }
        qs("#gameStart").innerHTML=`<h2>  חבל הפסדת כי לא זכרת שטובים השניים מן האחד, ולחצת על הקלף שאין לו בן זוג  </h2>`;
        qs("#reStartGame").innerHTML=`<button onclick="restartGame()" > להתחיל מחדש</button>`
    } 
}
//======================
function checkMatches(){   
    if ((pickedCardsName[0] !== pickedCardsName[1])){
        let firstPick = document.getElementById(pickedCardsID[0]) as any;
        let secondPick = document.getElementById(pickedCardsID[1]) as any;
        firstPick.addEventListener('click', flipCard);
        secondPick.addEventListener('click', flipCard);
        firstPick.setAttribute('src', "תמונות/sun.jpg");
        firstPick.parentElement.childNodes[2].innerHTML="שאולי";   
        secondPick.setAttribute('src', "תמונות/sun.jpg");
        secondPick.parentElement.childNodes[2].innerHTML="שאולי";   
    }
    else{
        myScore++; 
        let firstPick = document.getElementById(pickedCardsID[0]) as any ;
        let secondPick = document.getElementById(pickedCardsID[1]) as any; 
        firstPick.removeEventListener('click', flipCard);
        secondPick.removeEventListener('click', flipCard);
        cardsWon.push(firstPick);
        cardsWon.push(secondPick);
        console.log(cardsWon);
        score(cardsWon.length / 2);
    }
    pickedCardsName = [];
    pickedCardsID = [];
    qs("#scoreTrack").innerHTML=`<h2>   מספר צעדים: ${tryCounter}  , ניקוד:  ${myScore}  </h2>` 
}
//=============================
function score(number:number){
    if (number === x/2) {
        let y = document.querySelectorAll("img")
            for(let curr of y) { 
            curr.removeEventListener('click', flipCard); 
            }
        qs("#winner").innerHTML=`<h2> כל הכבוד זכרת והצלחת לסיים את המשחק, נסה שוב במספר קלפים גדול יותר או במספר צעדים קטן יותר   </h2>`;
        qs("#reStartGame").innerHTML=`<button onclick="restartGame()" > להתחיל מחדש</button>`
    }
}
//=============================
function restartGame(){
    window.location.reload();
}

