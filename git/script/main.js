$(document).ready(function(){

function okno1(){
$("#classik").attr("value","6445");
$("#lux").attr("value","6845");
$("#premium").attr("value","7345");
$("#panel").attr("value","1175");
$("#kirpich").attr("value","2175");
$("#otkos").attr("value","1200");
$("#setka").attr("value","500");
$("input[name='TYPE']").val("Двух створчатое");
}

function okno2(){
$("#classik").attr("value","8856");
$("#lux").attr("value","9356");
$("#premium").attr("value","9856");
$("#panel").attr("value","1764");
$("#kirpich").attr("value","2764");
$("#otkos").attr("value","1300");
$("#setka").attr("value","500");
$("input[name='TYPE']").val("Трех створчатое");
}

function okno3(){
$("#classik").attr("value","11080");
$("#lux").attr("value","11580");
$("#premium").attr("value","12180");
$("#panel").attr("value","2040");
$("#kirpich").attr("value","3040");
$("#otkos").attr("value","1700");
$("#setka").attr("value","1000");
$("input[name='TYPE']").val("Балконный блок");
}


$("#calc a").click(function(){
var id = $(this).attr("id");
if(id=="okno1"){
$(".img_scroll").animate({marginLeft: "0px"});
okno1();
}
else if(id =="okno2"){
$(".img_scroll").animate({marginLeft: "33.3%"});
okno2();
}
else if(id=="okno3"){
$(".img_scroll").animate({marginLeft: "66.6%"});
okno3();
}

current();

return false;
});


function current (){
var profil, dom, montag, otkos, setka, reschet;
// localStorage.profil = $("#profil").val(); localStorage.dom = $("#dom").val();
$("#raschet").text();
profil = $("#profil option:selected").attr("id");
dom = $("#dom option:selected").attr("id");

if($("#montag").prop("checked") == true){montag = $("#"+dom).val();} else { montag = 0;}
if($("#otkos").prop("checked") == true){otkos = $("#otkos").val();} else { otkos = 0;}
if($("#setka").prop("checked") == true){setka = $("#setka").val();} else { setka = 0;}

result = parseFloat($("#"+profil).val()) + parseFloat(montag) +	parseFloat(otkos) + parseFloat(setka);
$("#raschet").text(result);
$("input[name='RESULT']").val(result);

//resultat();

}



function rashchet(){
var profil, dom, montag, otkos, setka, reschet;
$("#montag").click(function(){
if($("#montag").prop("checked")==true){
montag = $("#dom").val();
raschet = $("#raschet").text();
raschet = parseFloat(raschet) + parseFloat(montag);
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

$("input[name='DOM_NAME']").val($("#dom option:selected").attr("title"));


}
else{
montag = $("#dom").val();
raschet = $("#raschet").text();
raschet = parseFloat(raschet) - parseFloat(montag);
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

}
//	resultat();
});


$("#otkos").click(function(){
if($("#otkos").prop("checked")==true){
otkos = $("#otkos").val();
raschet = $("#raschet").text();
raschet = parseFloat(raschet) + parseFloat(otkos);
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

}
else{
otkos = $("#otkos").val();
raschet = $("#raschet").text();
raschet = parseFloat(raschet) - parseFloat(otkos);
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

}
//	resultat();
});


$("#setka").click(function(){
if($("#setka").prop("checked")==true){
setka = $("#setka").val();
raschet = $("#raschet").text();
raschet = parseFloat(raschet) + parseFloat(setka);
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

}
else{
setka = $("#setka").val();
raschet = $("#raschet").text();
raschet = parseFloat(raschet) - parseFloat(setka);
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

}
//	resultat();
});
// localStorage.profil localStorage["profil"]

currentProf = $("#profil").val();
$("#profil").change(function(){
raschet = $("#raschet").text();
raschet = parseFloat(raschet) - parseFloat(currentProf);
currentProf =  $("#profil").val();
raschet = raschet + parseFloat($("#profil").val());
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

$("input[name='PROFIL_NAME']").val($("#profil option:selected").attr("title"));


//	resultat();
});

$("#calc a").click(function(){
  currentProf = $("#profil").val();
  currentDom = $("#dom").val();
});
currentDom = $("#dom").val();
$("#dom").change(function(){
if($("#montag").prop("checked")==true){
montag = $("#dom").val();
raschet = $("#raschet").text();
raschet = parseFloat(raschet) - parseFloat(currentDom);
currentDom =  $("#dom").val();
raschet = parseFloat(raschet) + parseFloat(montag);
$("#raschet").text(raschet);
$("input[name='RESULT']").val(raschet);

// resultat();
$("input[name='DOM_NAME']").val($("#dom option:selected").attr("title"));
}


});

}


function resultat(){
var result, procent;
procent = (parseFloat($("#raschet").text()) * 20)/100;
result = parseFloat($("#raschet").text()) - procent;
$("#result").text(result);
}



if($("#raschet").text() == false){ okno1();  $("#raschet").text(parseFloat($("#classik").val())); //resultat();
$("input[name='PROFIL_NAME']").val($("#profil option:selected").attr("title"));
$("input[name='DOM_NAME']").val($("#dom option:selected").attr("title"));

$("input[name='RESULT']").val(parseFloat($("#classik").val()));
}


rashchet();


});
