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
//Variável para liberaçao e bloqueio de seleçao de carta
var libera = true;
 			
//Variável de controle de cartas viradas
var qtdCartas = 0;
				
//Array com as cartas viradas
var arrCartas = new Array();	

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
			lastId = "";
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
		cancel();	
	});
	
	$('#btn-ok').click(function (){
		cancel();
		$('#finishModal').modal('hide');
		playersUpdate();
	});	

	$('img').click(function(){
		var id = position($(this).attr('id'));		
		if(!stop){
			if(libera){
 				//Bloqueia seleçao de nova carta
 				libera = false;
 				//Incrementa quantidade de cartas viradas
 				qtdCartas++;
 				//Inserindo a carta selecionada no array
 				arrCartas.push(id);
 				
 				//Funcao para revelar a carta
 				cardShow('img-'+id);					
 						
 				//Verifica se tem 2 ou mais cartas viradas
 				if(qtdCartas > 1){
 							
 					//Comparar as duas cartas, caso forem diferentes, desviram as cartas
 					if($("#img-"+arrCartas[0]).prop("src") != $("#img-"+arrCartas[1]).prop("src")){
 						setTimeout(function(){
 							//Desvirar as cartas depois de um segundo
 							for(i=0;i<arrCartas.length;i++){
 								cardHide('img-'+arrCartas[i]);
 							}
 							//Limpando o array
 							arrCartas = [];
 							//Libera seleçao de carta
 							libera = true;
							changePlayerTime();
 						},1000);
 					}
 					//Caso as cartas sejam iguais, apenas limpa o array com as cartas selecionadas
 					else{
						//Limpando o array
						arrCartas = [];
						//Libera seleçao de carta
						libera = true;
						if(player1IsPlaying){
							player1.points++;
						} else {
							player2.points++;
						}
						playersUpdate();
 					}
 							
 					//Reset da quantidade de cartas
 					qtdCartas = 0;
 				}
 				else{
 					//Libera seleçao de carta
 					libera = true;
 				}
 			}					
		}
		if(player1.points + player2.points >= 10){
			stop = true;
			finish();
			$('#finishModal').modal('show');
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

function position(id){
	return Number(id.substring(4,id.length));
}

function cardShow(id) {
	console.log('show->'+id);
	var i = position(id);
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

function changePlayerTime(){
	if(player1IsPlaying){
		$('#list-player-1').removeClass('active');
		$('#list-player-2').addClass('active');
		player1IsPlaying = false;
	} else {
		$('#list-player-2').removeClass('active');
		$('#list-player-1').addClass('active');
		player1IsPlaying = true;		
	}
}

function cancel(){
	cards = [
		"coyote.jpg",
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
	   "woody.jpg"
	];
	player1 = {name:"Jogador 1", points:0};
	player2 = {name:"Jogador 2", points:0};
	stop = true;
	tho = sec = min = 0;
	time = "";
	player1IsPlaying = true;
	libera = true;
	qtdCartas = 0;
	arrCartas = new Array();
	var i = 1;
	for(i;i<=cards.length;i++){
		cardHide('img-'+i);
	}
}

function finish(){
	$('#finish-pts-player-1').html(player1.points);
	$('#finish-pts-player-2').html(player2.points);
	$('#finish-timer').html(time);
	if(player1.points > player2.points){
		$('#finish-name-player-1').html(player1.name+" (Vencedor!)");
	} else {
		$('#finish-name-player-2').html(player2.name+" (Vencedor!)");
	}
}