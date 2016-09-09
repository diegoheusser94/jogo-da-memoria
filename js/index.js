var personagens = ["coyote.jpg","dk.jpg","jerry.png","luigi.jpg","mario.png","sonic.jpg","speedy_gonzalez.png","star.jpg","tom.png","woody.jpg","coyote.jpg","dk.jpg","jerry.png","luigi.jpg","mario.png","sonic.jpg","speedy_gonzalez.png","star.jpg","tom.png","woody.jpg"];

function embaralhar() {
    var j, x, i;
    for (i = personagens.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = personagens[i - 1];
        personagens[i - 1] = personagens[j];
        personagens[j] = x;
    }
}

function setImagens(){
	var i, b;
	for (i = 0; i < personagens.length; i++) {
		document.getElementById("img-"+(i+1)).src = "img/"+personagens[i];
	}
}

function revelar(id) {
	var i = Number(id.substring(4,id.length));
	document.getElementById(id).src = "img/"+personagens[i-1];
}