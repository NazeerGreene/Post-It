var totalNotes = 0;

function writeNote(){
	var note = document.getElementById("newNote");
	var val = note.textContent + "!!!";
	note.textContent = val;
	
	console.log(val);
};
