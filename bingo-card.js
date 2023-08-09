window.onload = initAll;

var usedNums = new Array(76);
var possibleOutcomes = [
  // collectibles: 0-2

  "5 gnomes",
  "5 rubber bands",
  "5 G&amp;G cards",

  // classes: 3-11

  "Chemistry Class",
  "Gym Class",
  "Biology Class",
  "English Class",
  "Geography Class",
  "Math Class",
  "Shop Class",
  "Art Class",
  "Music Class",

  // side missions: 12-23

  "Clique challenge",
  "Mailbox Armageddon",
  "The Collector",
  "Weed Killer",
  "Smash It Up",
  "The Diary",
  "Discreet Deliveries",
  "Cook's Crush",
  "Glass House",
  "Panty Raid",
  "Character Sheets",
  "A Little Help",

  // jobs/races: 24-

  "BT Bike race",
  "OBV Bike Race",
  "OBV Kart Race",
  "Blue Skies Kart Race",
  "Carnival Kart Race",
  "Paper route",
  "Lawn mowing",
  "Boxing match",
  "Keep-ups",
  "Penalty Shots",

  // errands: 34-38

  "3 Blue Skies Errands",
  "3 School Errands",
  "3 BT Errands",
  "3 NC Errands",
  "3 OBV Errands",

  // minigames: 39-41

  "NutShots (30k)",
  "Monkey Fling Highscore (333)",
  "Full Arcade street race",

  // tags: 42-

  "5 NC Tags",
  "3 BT Tags",
  "3 OBV Tags",
  "Spazz Tag",
  "5 Blue Skies Tags",
  "5 School Tags",

  // misc: 48-60

  "Carnival Ride",
  "1 photo of each clique",
  "Final Cut",
  "5 fire alarms",
  "Kill Pirate",
  "Win midget fight",
  "3 Kisses",
  "All Tombstones", 
  "Buy Scooter",
  "Asylum Gnome",
  "Wonder Meats G&G",
  "Train RB",
  "2 Yearbook Pages"
]

const copy = [...possibleOutcomes]

function customObjectives(){
  customArray = [...possibleOutcomes]
  //objText = document.getElementById("objectivesdisplay")
  function showObjectives(){
    for (var i = 0; i < possibleOutcomes.length; i++){
      //objText.innerHTML += possibleOutcomes[i] + "<br>"
      newInput = document.createElement("input")
      newInput.type = "checkbox"
      newInput.id = "objective"+i
      newInput.checked = true
      inputLabel = document.createElement("label")
      inputLabel.for = newInput.id
      inputLabel.id = "label"+i
      inputLabel.innerHTML = customArray[i] +"<br>"
      document.getElementById("objectiveslist").append(newInput)
      document.getElementById("objectiveslist").append(inputLabel) 
    }
  }
  showObjectives()
  customObjective = document.createElement("input")
  customObjective.type = "text"
  customObjective.id = "custom"
  customLabel = document.createElement("label")
  customLabel.for = customObjective.id
  customLabel.innerHTML = "Custom objective: "
  document.getElementById("objectiveslist").append(customLabel)
  document.getElementById("objectiveslist").append(customObjective)
  customBtn = document.createElement("button")
  if (document.getElementById("lightmode").checked){
    customBtn.style.backgroundColor = "white"
    customBtn.addEventListener('mouseenter', function(e){
      e.target.style.backgroundColor = "rgb(255, 179, 0)"
      e.target.style.color = "white"
    })
    customBtn.addEventListener('mouseleave', function(e){
      e.target.style.backgroundColor = "white"
      e.target.style.color = "black"
    })
  } else if (document.getElementById("darkmode").checked){
    customBtn.style.backgroundColor = "black"
    customBtn.addEventListener('mouseenter', function(e){
      e.target.style.backgroundColor = "rgb(255, 179, 0)"
      e.target.style.color = "white"
    })
    customBtn.addEventListener('mouseleave', function(e){
      e.target.style.backgroundColor = "black"
      e.target.style.color = "white"
    })
  }
  
  customBtn.className += "button"
  customBtn.innerHTML = "Set objective"
  document.getElementById("objectiveslist").append(customBtn)
  customP = document.createElement("p")
  customP.innerHTML = ""
  document.getElementById("objectiveslist").append(customP)
  customP.style.borderStyle = "solid"
  k = 0
  customBtn.onclick = () => {
    if (k ==   0){
      customP.innerHTML += "Custom objectives: <br><br>"
      k++
    }
    customArray.push(customObjective.value)
    console.log(possibleOutcomes)
    customP.innerHTML += customObjective.value + "<br>"
    customObjective.value = ""
  }
  finishBtn = document.createElement("button")
  finishBtn.addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "rgb(255, 179, 0)"
    e.target.style.color = "black"
  })
  finishBtn.addEventListener('mouseleave', function(e){
    e.target.style.backgroundColor = "white"
    e.target.style.color = "black"
  })
  finishBtn.className = "button"
  finishBtn.innerHTML = "Finish objective list"
  finishBtn.onclick = () => {
    finishBtn.style.backgroundColor = "green"
    /*setTimeout(() => {
      if (document.getElementById("lightmode").checked){
        finishBtn.style.backgroundColor = "white"
      }
      if (document.getElementById("darkmode").checked){
        finishBtn.style.backgroundColor = "black"
      }
      
    }, 1500)*/
    
    for (var j = 0; j < copy.length; j++){
      o = document.getElementById("objective"+j)
      l = document.getElementById("label"+j)
      if (o.checked == false){
        ls = l.innerHTML.substring(0, l.innerHTML.length-4)
        console.log(ls)
        idx = customArray.indexOf(ls)
        console.log(idx)
        if (idx != -1){
          customArray.splice(idx, 1)
          console.log(customArray)
        }
      }
    }
    possibleOutcomes = customArray
    console.log(possibleOutcomes)
  }
  generateSeed()
  document.getElementById("objectiveslist").append(finishBtn)

}

var seed = []
function generateSeed(){
  seed = []
  outcomesPop = [...possibleOutcomes]
  for (var i = 0; i < 24; i++){
    if (i < 24){
      l = outcomesPop.length
      randomIdx = Math.floor(Math.random()*l)
      out = outcomesPop.splice(randomIdx, 1)[0]
      seed.push(possibleOutcomes.indexOf(out))
    }
  }
  console.log(seed)
}
generateSeed()

function shareSeed(){
  document.getElementById("seedshow").innerHTML = seed
}

function useSeed(){
  newseed = document.getElementById("sharedseed").value
  if (newseed != ""){
    newseed = newseed.split(",")
    i = 0
    newseed.forEach(e => {
      e = Number(e)
      newseed[i] = e
      i++
    })
  }
  if (newseed.length == seed.length){
    seed = newseed
    for (var i = 1; i < usedNums.length; i++) {
      usedNums[i] = false;
    };
    newCard();
  }
}

function addHoverToButtons(){
  buttons = document.getElementsByClassName('button')
  Object.keys(buttons).forEach(a=>{
    console.log(a)
    buttons[a].addEventListener('mouseenter', function(e){
      e.target.style.backgroundColor = "rgb(255, 179, 0)"
      e.target.style.color = "white"
    })
  })
  Object.keys(buttons).forEach(a=>{
    buttons[a].addEventListener('mouseleave', function(e){
      e.target.style.backgroundColor = "white"
      e.target.style.color = "black"
    })
  }) 
}


function loadCard(){
  useSeed() 
  newCard()
  document.getElementById("seedshow2").innerHTML = "<br>Seed: <br>"+ seed
  console.log(document.getElementById("darkmode").checked)
  if (document.getElementById("darkmode").checked == true){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  } else {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
  document.getElementById("top_title").hidden = "hidden"
  document.getElementById("uwu").hidden = "hidden"
  document.getElementById("card").removeAttribute("hidden")
  document.getElementById("config").hidden = "hidden"
}

function loadConfig(){
  location.reload()
}

function initAll() {
  addHoverToButtons()

  // dark / light mode

  document.getElementById("darkmode").addEventListener('change', function(){
    if (this.checked){
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      buttons = document.getElementsByClassName("button")
      for (var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "black"
        buttons[i].style.color = "white"
      }
      buttons = document.getElementsByClassName('button')
      Object.keys(buttons).forEach(a=>{
        console.log(a)
        buttons[a].addEventListener('mouseenter', function(e){
          e.target.style.backgroundColor = "rgb(255, 179, 0)"
          e.target.style.color = "white"
        })
      })
      Object.keys(buttons).forEach(a=>{
        buttons[a].addEventListener('mouseleave', function(e){
          e.target.style.backgroundColor = "black"
          e.target.style.color = "white"
        })
      }) 
    } 
    document.getElementById("lightmode").checked = false
  })

  document.getElementById("lightmode").addEventListener('change', function(){
    if (this.checked){
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      buttons = document.getElementsByClassName("button")
      for (var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "white"
        buttons[i].style.color = "black"
      }
      buttons = document.getElementsByClassName('button')
      Object.keys(buttons).forEach(a=>{
        console.log(a)
        buttons[a].addEventListener('mouseenter', function(e){
          e.target.style.backgroundColor = "rgb(255, 179, 0)"
          e.target.style.color = "white"
        })
      })
      Object.keys(buttons).forEach(a=>{
        buttons[a].addEventListener('mouseleave', function(e){
          e.target.style.backgroundColor = "white"
          e.target.style.color = "black"
        })
      }) 
    } 
    document.getElementById("darkmode").checked = false
  })

  // initialize card
  if (document.getElementById){
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0 ; i<24 ; i++){
      setSquare(i);
    }
}

var squareBool = {}
for (var i = 0; i < 24; i++){
  squareBool["square"+i] = 0
}

function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;

  document.getElementById(currentSquare).onclick = function(){
    if (squareBool[currentSquare] == 0){
      console.log(squareBool[currentSquare])
      document.getElementById(currentSquare).style.backgroundColor = "green"
      squareBool[currentSquare] = 1
    }
    else if (squareBool[currentSquare] == 1){
      document.getElementById(currentSquare).style.backgroundColor = "transparent"
      squareBool[currentSquare] = 0
    }
  }
  console.log(possibleOutcomes)
  document.getElementById(currentSquare).innerHTML = possibleOutcomes[seed[thisSquare]]
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };
  generateSeed()
  for (var i = 0; i < 24; i++){
    squareBool["square"+i] = 0
    document.getElementById("square"+i).style.backgroundColor = "transparent"
  }
  console.log(squareBool)
  newCard();
  document.getElementById("seedshow2").innerHTML = "<br>Seed: <br>"+ seed + "<br>"
  console.log(squareBool)
  
  return false;
}