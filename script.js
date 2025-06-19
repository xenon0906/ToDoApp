const title = document.querySelector('input[name="title"]');
const description = document.querySelector('textarea');
const submitBtn= document.querySelector('#submit');
const notesList = document.querySelector('#displayNotes');

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const currentTitle = title.value;
    const currentDescription = description.value;

    if (!currentTitle && !curretDescription) {
        alert('Please enter a title or description for your task!');
        return; // Stop the function execution
    }

    const newNote = document.createElement('div');
    newNote.className = "notes";

    //title
    const newTitle = document.createElement('h3');
    newTitle.className = 'title';
    newTitle.innerText = currentTitle;

    //description
    const newdescr = document.createElement('p');
    newdescr.className = 'description';
    newdescr.innerText = currentDescription;
    
    //delete button
    const delbtn = document.createElement('button');
    delbtn.innerText = 'Delete'
    delbtn.className = 'delbtn';

    //update button
    const updatebtn = document.createElement('button');
    updatebtn.innerText = 'update';
    updatebtn.className = 'updatebtn';

    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'note-buttons'; // Add a class for styling
    buttonContainer.append(delbtn);
    buttonContainer.append(updatebtn);

    //inputs for updating notes
    const updTitle = document.createElement('input');
    updTitle.type = 'text';
    const updDescr = document.createElement('textarea');
    updTitle.style.display = 'none';
    updDescr.style.display = 'none';

    //appending all elements to the note
    newNote.appendChild(newTitle);
    newNote.append(newdescr);
    newNote.append(buttonContainer); //directly added this container
    // newNote.append(delbtn);
    // newNote.append(updatebtn);
    newNote.append(updTitle,updDescr);

    //appending note to the list of notes
    notesList.append(newNote);

    // Clear the input fields after submission
    title.value = '';
    description.value = '';

    //updating the note
    updatebtn.addEventListener('click',()=>{
        newTitle.style.display = 'none';
        newdescr.style.display = 'none';

        updTitle.style.display = 'block';
        updDescr.style.display = 'block';

        updTitle.value = newTitle.innerText;
        updDescr.value = newdescr.innerText;

        // Hide update and delete buttons during edit
        updatebtn.style.display = 'none';
        delbtn.style.display = 'none';

        const okBtn = document.createElement('button');
        okBtn.innerText = 'OK'
        okBtn.className = 'okBtn'

        newNote.append(okBtn);

        okBtn.addEventListener('click',()=>{
            newTitle.innerText = updTitle.value;
            newdescr.innerText = updDescr.value;

            updTitle.style.display = 'none'
            updDescr.style.display = 'none'

            newTitle.style.display = 'block'
            newdescr.style.display = 'block'

            // Show update and delete buttons again
            updatebtn.style.display = 'inline-block'; 
            delbtn.style.display = 'inline-block';   

            okBtn.remove();
        })
    })

    //deleting the note
    delbtn.addEventListener('click',()=>{
        newNote.remove();
    })

});