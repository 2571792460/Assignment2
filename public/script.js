//addANote must be called after save button is clicked
//uncomment to test addANote function
// const title = "note2"
// const note = "this is a sample note"
// addANote(title, note) 

//function to add a note with fetch
async function addANote(noteTitle, noteBody) {
  const data = { title: noteTitle, note: noteBody };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/newNote', options);
  // making sure the json data was transferred
  const json = await response.json();
  console.log(json);
}

//getOneNote must be called after any of the item's on the sidebar is clicked
//uncomment to test get a note (AddANote should be called first)
// let data = getOneNote(title);


// function to get one note using a query string
async function getOneNote(noteTitle) {
  const response = await fetch(`/oneNote/?note=${noteTitle}`)
  const json = await response.json()
  const data = JSON.parse(json)
//call the  function to display the retrieved note
displayNote(data.note);
}

//write a function to display the retrieved note
function displayNote(note) {
  
}



let btn = document.querySelector("#color");
btn.addEventListener('click',changecolor);
function changecolor(){
    if(btn.innerHTML === "Dark"){
        btn.innerHTML = "Light"
    document.querySelector("ul").style.backgroundColor = "darkgray"
    document.querySelector(".main").style.backgroundColor= "gray"
    btn.style.backgroundColor="red"
    }
    else if(btn.innerHTML === "Light")
    {   btn.innerHTML = "Dark"
        document.querySelector("ul").style.backgroundColor = "rgb(224, 221, 221)"
        document.querySelector(".main").style.backgroundColor="rgb(236, 236, 235)"
        btn.style.backgroundColor="green"
    }
}

let btn2 = document.querySelector("#note");
btn2.addEventListener('click',addtext);
function addtext(){
    document.querySelector(".textarea").innerHTML = `<textarea class="text" rows=10 cols=50></textarea>`;
    document.querySelector("#save").innerHTML = "<button>SAVE</button>";
    document.querySelector("#cancel").innerHTML= "<button>CANCEL</button>"
}

let btn3 = document.querySelector("#save");
btn3.addEventListener('click',savetext);
function savetext(){
    type = document.querySelector(".text").value;
    document.querySelector(".more").innerHTML += `<li>${type}</li>`
}

let btn4 = document.querySelector("#cancel");
btn4.addEventListener('click',canceltext);
function canceltext(){
  document.querySelector(".textarea").innerHTML = ``;
    document.querySelector("#save").innerHTML = "";
    document.querySelector("#cancel").innerHTML= ""
}
