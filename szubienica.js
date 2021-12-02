var words = new Array(10);
words[0] = "Mitologia Nordycka";
words[1] = "Mitologia Słowiańska";
words[2] = "Kinematografia";
words[3] = "Telewizja radiowa";
words[4] = "Komedia romantyczna";
words[5] = "Hitman";
words[6] = "Bezludna wyspa";
words[7] = "Placki po węgiersku";
words[8] = "Komputer stacjonarny";
words[9] = "Aparat fotograficzny";



var wordsLength = words.length;

var word = words[Math.floor(Math.random()* wordsLength)];

var category = "";

//var categorys = new Array(10); 
//categorys[0] = "Religie i kultura";
//categorys[1] = "Religie i kultura";
//categorys[2] = "Film";
//categorys[3] = "Technologia";
//categorys[4] = "Film";
//categorys[5] = "Kultowe gry komputerowe";
//categorys[6] = "Geografia";
//categorys[7] = "Dania i potrawy";
//categorys[8] = "Technologia";
//categorys[9] = "Technologia";

word = word.toUpperCase();
var length= word.length;
var miss= 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");


var word1= "";
for (i=0; i<length; i++)
{
	if (word.charAt(i)==" ")
	{
		word1 = word1 + " ";
	}
	else word1 = word1 + "-";
}


function write_word()
{
	document.getElementById("word").innerHTML= word1;
	
	
	//testy for(i=0;i>=10;i++)
	//{//
		
	//}

}
window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{
	var content= "";
	//var content2= '<form action=""><input name="know" type="text"/><input type="button" value="sprawdz"/>Już znasz hasło?</from>'
	
	for (i=0;i<=34;i++)
	{
		var element = "lit" + i;
		content = content + '<div class="letter" onclick="check('+i+')" id = "'+element+'">'+litery[i]+'</div>';
		if((i+1) % 7 ==0)
		{
			content = content + '<div style="clear:both;"></div>';
		}
	}
	document.getElementById("alphabet").innerHTML= content;
	
	write_word();
}

String.prototype.setSign = function(place, sign)
{
	if(place > this.length - 1) return this.toString();
	else return this.substr(0, place) + sign + this.substr(place+1);
}

function check(nr)
{
	var hit = false;
	var Yknow= document.forms["know"];
	
	for(i=0; i<length; i++)
	{
		if(word.charAt(i) == litery[nr])
		{
			word1 = word1.setSign(i,litery[nr]);
			hit = true;
		}
	}
	
	if(hit == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background= "#003300";
		document.getElementById(element).style.color= "#00C000";
		document.getElementById(element).style.border= "3px solid #00C000";
		document.getElementById(element).style.cursor= "default";
		
		write_word();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background= "#330000";
		document.getElementById(element).style.color= "#C00000";
		document.getElementById(element).style.border= "3px solid #C00000";
		document.getElementById(element).style.cursor= "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		miss++;
		var picture = "img/s"+ miss +".jpg";
		document.getElementById("gallows").innerHTML = '<img src="'+picture+'" alt="" />';
	}

	//win	
	if(word == word1)
	{
		document.getElementById("alphabet").innerHTML = "Udało się! Odkryłeś podane hasło: "+word+ '<br/></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
	}
	
	//lost
	if(miss >=9)
	{
	document.getElementById("alphabet").innerHTML = "Przegrana! Niestety nie udało się, prawidłowe hasło to: "+word+ '<br/></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'	
	}	
	
	

}

