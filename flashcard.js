
//constuctor for the basic flashcards
function BasicCard(front, back){
    this.front = front;
    this.back = back;
}

//constructor for the Cloze flashcards
function ClozeCard(text, cloze){
    this.text=text;
    this.cloze = cloze;

    this.clozeDeleted = function{
        console.log(cloze);
    }

    this.partialText = function{
        console.log(text);
    }

    this.fullText = function{
        console.log(text + " " + cloze);
    }
}

var cardType = process.argv[2];
var userInput1 = process.argv[3];
var userInput2 = process.argv[4];

if(cardType === "Basic"){

    var newBasic = new BasicCard(userInput1, userInput2);
}

if(cardType === "Cloze"){

    var newCloze = new ClozeCard(userInput1, userInput2);
}