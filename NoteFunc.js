setTimeout(function () {
    console.log("working")
    showNotes();

    // user add a note add it to local storage
    let addBtn = document.getElementById('addBtn')
    addBtn.addEventListener('click', function (e) {

        let addTxt = document.getElementById('addTxt')
        console.log(addTxt.value)
        let notes = localStorage.getItem('notes');

        if (notes == null) {
            notesObj = [];

        }
        else {
            notesObj = JSON.parse(notes)
        }
        notesObj.push(addTxt.value)
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addTxt.value = " "
        console.log(notesObj)
        showNotes();


    })



    function showNotes() {
        let notes = localStorage.getItem('notes')

        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes)
        }
        let html = ""
        notesObj.forEach(function (element, index) {
            html += `
           <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">Note ${index + 1}</h5>
               <p class="card-text"> ${element}</p>
               <button id="${index}"onclick="deleteNote(this.id)"  class="btn btn-primary">Delete</button>
           </div>
       </div>`

        });
        let noteselm = document.getElementById('notes')
        if (notesObj.length != 0) {
            noteselm.innerHTML = html;


        }
        else {
            noteselm.innerHTML = `NOTHING TO SHOW PLEASE ADD A NOTE FUNCTION TO POPPULATE`
        }
    }

    function deleteNote(index) {
        //   console.log("I am deleting", index);

        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }

    searchtxt=document.getElementById('searchtxt')
    searchtxt.addEventListener('input', function(){
        
        let inputval = searchtxt.value.toLowerCase()
        console.log("input",inputval)
        let noteCard=document.getElementsByClassName('noteCard')
        Array.from(noteCard).forEach(function(e){
            let cardtxt=e.getElementsByTagName('p')[0].innerText
            // console.log(cardtxt)
            if(cardtxt.includes(inputval)){
                e.style.display= "block"
            }else{
                e.style.display= "none"

            }
        })

    })

}, 1000)