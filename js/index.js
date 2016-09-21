//Variaveis
var cards = ["coyote.jpg",
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

var player1 = {name:"Jogador 1", points:0};
var player2 = {name:"Jogador 2", points:0};
var stop = true;
var tho = sec = min = 0;
var time = "";
var player1IsPlaying = true;
var lastId = "";	

$(document).ready(function () {

	//Eventos
	$('#btn-start').click(function (){
		var name_user_1 = $('#edit-name-user-1').val();
		var name_user_2 = $('#edit-name-user-2').val();

		if(name_user_1 != '' && name_user_2 != ''){
			player1 = {name:name_user_1, points:0};
			player2 = {name:name_user_2, points:0};
			playersUpdate();
			$('#startModal').modal('hide');
			shuffle();
			if(stop){
				stop = false;
				chronometer();		
			}
		} else {
			$('#alert-warning').show();
		}
	});

	$('#btn-close').click(function (){
		player1 = {name:"Jogador 1", points:0};
		player2 = {name:"Jogador 2", points:0};
		$('#edit-name-user-1').val("");
		$('#edit-name-user-2').val("");
		$('#alert-warning').hide();
	});

	$('#btn-cancel').click(function (){
		stop = true;	
	});

	$('img').click(function(){
		if(!stop){
			var id = $(this).attr('id');
			cardShow(id);
			if(lastId != ""){
				cardHide(lastId);
			}
			lastId = id;
		}
	});
});

//Funções
function shuffle() {
   var j, x, i;
   for (i = cards.length; i; i--) {
       j = Math.floor(Math.random() * i);
       x = cards[i - 1];
       cards[i - 1] = cards[j];
       cards[j] = x;
   }
}

function cardShow(id) {
	var i = Number(id.substring(4,id.length));
	document.getElementById(id).src = "img/"+cards[i-1];
}

function cardHide(id){
	document.getElementById(id).src = "img/verso.jpg";
}

function chronometer(){
	if (stop == false){
		tho++;
		if(tho > 9){
			tho = 0;
			sec++;
		}
		if(sec > 59){
			sec = 0;
			min++;
		}	
		if(min < 10){
			time = "0";
		}
		time = time + min + ":";
		if(sec < 10){
			time = time + "0";
		}
		time = time + sec + ":" + tho;
		$('#timer').html(time);
		setTimeout('chronometer()',100);
	}
}

function playersUpdate(){
	$('#pts-player-1').html(player1.points);
	$('#name-player-1').html(player1.name);
	$('#pts-player-2').html(player2.points);
	$('#name-player-2').html(player2.name);
}
