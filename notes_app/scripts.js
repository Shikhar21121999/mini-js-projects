console.log(localStorage.getItem('notes'));
const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach(note => {
        addnewnote(note);
    })
}

const addBtn=document.querySelector(".new_note");

function addnewnote (note=""){
    // adding a new note using it
    const nnote=document.createElement("div");
    nnote.classList.add("note");
    const var_text="i am a note";
    nnote.innerHTML=
        `<div class="toolbar" >
            <button class="edit"><i class="far fa-edit"></i></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main"></div>
        <textarea class="hidden"></textarea> `;

    const editBtn= nnote.querySelector(".edit");
    const delBtn=nnote.querySelector(".delete");
    const main=nnote.querySelector(".main");
    const textarea=nnote.querySelector("textarea");

    textarea.value = note;
    main.innerHTML = marked(note);
    console.log(editBtn);

    editBtn.addEventListener("click",() => {
        console.log(editBtn);
        console.log("inside edit button");
        // we toggle a class that is added and removed on pressing this button
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        console.log("toggled");
    })

    delBtn.addEventListener("click", () => {
        // reomves the note
        nnote.remove();
        updateLS();
    })

    textarea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML=marked(value);
        updateLS();

    });

    document.body.appendChild(nnote);
}

addBtn.addEventListener("click",() => {
    console.log("addbutton is pressed");
    addnewnote();
    
});


function updateLS () {
    // this takes in data of all the text area fields and updates data of local storage

    const notes_text=document.querySelectorAll('textarea');

    const notes=[]

    notes_text.forEach(note => {
        if(note.value=="")return;
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}

