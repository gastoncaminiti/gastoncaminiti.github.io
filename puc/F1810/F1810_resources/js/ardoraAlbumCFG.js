//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=12; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=5; scoreDec=5
var typeGame=1;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#555555"; colorText="#000000"; colorSele="#80FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="¡Fantástico, identificaste todas las figuras!"; messageTime=""; messageError="¡Ups, algunas figuras no tienen el nombre correcto!"; messageAttempts="¡Agotaste todos los intentos, vuelve a intentar!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var imaSel=0; texSel=0;
var board=[["F1810_resources/media/1.png","F1810_resources/media/2.png","F1810_resources/media/3.png","F1810_resources/media/4.png"],["F1810_resources/media/5.png","F1810_resources/media/6.png","F1810_resources/media/7.png","F1810_resources/media/8.png"],["F1810_resources/media/9.png","F1810_resources/media/10.png","F1810_resources/media/11.png","F1810_resources/media/12.png"],["0","0","0","0"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[]; answers=[["Cornelio Saavedra","Mariano Moreno","Juan José Paso","Manuel Belgrano"],["Juan Larrea","Domingo Matheu","Miguel de Azcuénaga","Manuel Alberti"],["Juan José Castelli","Domingo French","Antonio Luis Beruti","Baltasar Cisneros"],["0","0","0","0"]]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="RjE4MTA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
