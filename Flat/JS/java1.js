var time = setInterval("Time()", 1000);
var y = 0;
function Time(){
	y++
	document.getElementById("time_h2").innerHTML = ("Вы находитесь на странице уже " + y);
}
function PE1_over(){
	document.getElementById("PE1").style = ("background: white;");
}
function PE1_out(){
	document.getElementById("PE1").style = ("background: #e4e4e4;");
}
function PE1_click(){
	document.getElementById("PE1").style = ("background: white;");
	document.getElementById("Mmenu").style = ("background: white;")
	document.getElementById("Mmenu").innerHTML =("<div class='PE'><div id='PE1' onmouseover='PE1_over()' onmouseout='PE1_out()' onclick='PE1_click()'>Чип и Дейл видео</div><div id='PE2' onmouseover='PE2_over()' onmouseout='PE2_out()' onclick='PE2_click()'>Связатся с нами</div><div id='PE3' onmouseover='PE3_over()' onmouseout='PE3_out()' onclick='PE3_click()'>Фото Шерлока Холмса</div><div id='PE4'></div></div><iframe width='550'height='250' src='https://www.youtube.com/embed/GEY95hIlw2s' frameborder='0' allowfullscreen></iframe>")
}
function PE2_over(){
	document.getElementById("PE2").style = ("background: white;");
}
function PE2_out(){
	document.getElementById("PE2").style = ("background: #e4e4e4;");
}
function PE2_click(){
	document.getElementById("PE2").style = ("background: white;");
	document.getElementById("Mmenu").style = ("background: white;")
	document.getElementById("Mmenu").innerHTML = ("<div class='PE'><div id='PE1' onmouseover='PE1_over()' onmouseout='PE1_out()' onclick='PE1_click()'>Чип и Дейл видео</div><div id='PE2' onmouseover='PE2_over()' onmouseout='PE2_out()' onclick='PE2_click()'>Связатся с нами</div><div id='PE3' onmouseover='PE3_over()' onmouseout='PE3_out()' onclick='PE3_click()'>Фото Шерлока Холмса</div><div id='PE4'></div></div><img src='image/mail.png'><p>Mail: ivan.2013.ie@mail.ru</p><img src='image/vk.png'><p>ВКонтакте: <a href='https://vk.com/ivanpisckun'>Іван Піскун</a></p><img src='image/pg.png'><p>PlayGround: <a href='http://users.playground.ru/2136883/'>Lord of nord</a></p>")
}
function PE3_over(){
	document.getElementById("PE3").style = ("background: white;");
}
function PE3_out(){
	document.getElementById("PE3").style = ("background: #e4e4e4;");
}
function PE3_click(){
	document.getElementById("PE3").style = ("background: white;");
	document.getElementById("Mmenu").style = ("background: white;")
	document.getElementById("Mmenu").innerHTML = ("<div class='PE'><div id='PE1' onmouseover='PE1_over()' onmouseout='PE1_out()' onclick='PE1_click()'>Чип и Дейл видео</div><div id='PE2' onmouseover='PE2_over()' onmouseout='PE2_out()' onclick='PE2_click()'>Связатся с нами</div><div id='PE3'  onmouseover='PE3_over()' onmouseout='PE3_out()' onclick='PE3_click()'>Фото Шерлока Холмса</div><div id='PE4'></div></div><img src='image/sher.jpg'>")
}
