$(document).ready(function () {
	
	//Variaveis
	var personagens = ["coyote.jpg",
				   "dk.jpg",
				   "jerry.png",
				   "luigi.jpg",
				   "mario.png",
				   "sonic.jpg",
				   "speedy_gonzalez.png",
				   "star.jpg",
				   "tom.png",
				   "woody.jpg",
				   "coyote.jpg",
				   "dk.jpg",
				   "jerry.png",
				   "luigi.jpg",
				   "mario.png",
				   "sonic.jpg",
				   "speedy_gonzalez.png",
				   "star.jpg",
				   "tom.png",
				   "woody.jpg"];

	var player1 {name:"Jogador 1", points:0};
	var player2 {name:"Jogador 2", points:0};

	//Funções
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

	function desvirarCarta(id){
	document.getElementById(id).src = "img/verso.jpg";
	}

	//Eventos
	$('#btn-start').click(function (){
		var name_user_1 = $('#edit-name-user-1').val();
		var name_user_2 = $('#edit-name-user-2').val();

		if(name_user_1 != '' && name_user_2 != ''){
			player1 = {name:name_user_1, points:0};
			player2 = {name:name_user_2, points:0};
		} else {
			$('#alert-warning').show();
		}
	});

	$('#btn-close').click(function (){
		player1 {name:"Jogador 1", points:0};
		player2 {name:"Jogador 2", points:0};
		$('#edit-name-user-1').val("");
		$('#edit-name-user-2').val("");
		$('#alert-warning').hide();
	});
});



