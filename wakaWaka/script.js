



defaultSong=['choose ','a ','song']
defaultSongName='';
neverGonnaGiveYouUp=['ne','ver ','gon','na ','give ','you ','up.<br>','ne','ver ','gon','na ','let ','you ','do','w','n.<br>','ne','ver ','gon','na ','run ','a','ro','und ','and<br>','de','sert ','you.<br>'];
neverGonnaGiveYouUpName='never gonna give you up - rick astley';
yeetYeetSkrrt=['yeet ','yeet ','skrrt,<br>','yeet ','yeet ','skrrt ','skrrt ','skrrt.<br>','roll ','out ','(yeet)<br>','drop ','that ','(yeet)<br>','skrrt ','that ','(yeet)<br>','prop ','that ','(yeet),<br>','ay ','ay<br>','ay ','ay,<br>','you ','ne','ver ','loved ','me, ','mom.<br>','but ','i ','nee','ded ','you, ','wo','a','h.'];
yeetYeetSkrrtName='yeet - guaplord & $mokecheddathaassgetta';
bakaMitai=['だ','め','だ','ね<br>','だ','め','よ<br>','だ','め','な','の','よ、<br>','あん','た','が<br>','好','き','で<br>','好','き','す','ぎ','て、<br>','ど','れ','だ','け<br>','強','','い','お','酒','','で','も、<br>','歪','','ま','な','い、<br>','思','','い','出','が、<br>','馬','鹿','み','たい'];
bakaMitaiName='馬鹿みたい - 黒田崇矢';
dirtyHarry=['i ','need ','a ','gun ','to ','keep ','my','self ','a','mong<br>','the ','poor ','peo','ple ','are ','burn','ing ','in ','the ','sun<br>','but they ','aint ','got ','a ','chance<br>','they ','aint ','got ','a ','chance<br>','i ','need ','a ','gun ','cause ','all ','i ','do ',' is ','dance<br>','cause ','all ','i ','do ','is ','dance<br>','i ','need ','a ','gun ','to ','keep ','my','self ','a','mong<br>','the ','poor ','peo','ple ','are ','burn','ing ','in ','the ','sun<br>','but they ','aint ','got ','a ','chance<br>','they ','aint ','got ','a ','chance<br>','i ','need ','a ','gun ','cause ','all ','i ','do ',' is ','dance<br>','cause ','all ','i ','do ','is ','dance'];
dirtyHarryName=['dirty harry - gorillaz'];




function findSong(){
	var e = document.getElementById("songSlct");
	var song = e.options[e.selectedIndex].value;
	switch(song){
		default:
		alert('there was an error while changing the song');
		break;
		case 'defaultSong':
		changeSong(defaultSong, defaultSongName);
		break;
		case 'neverGonnaGiveYouUp':
		changeSong(neverGonnaGiveYouUp, neverGonnaGiveYouUpName);
		break;
		case 'yeetYeetSkrrt':
		changeSong(yeetYeetSkrrt, yeetYeetSkrrtName);
		break;
		case 'bakaMitai':
		changeSong(bakaMitai,bakaMitaiName);
		break;
		case 'dirtyHarry':
		changeSong(dirtyHarry,dirtyHarryName);
		break;
	}
	}

function changeSong(song, songName){
	document.getElementById('curWord').innerHTML='';
	d=0;
	stopSinging=false;
	prntItOut='';
	fullThing=song;
	prntItOut+=fullThing[d];
	d=1;
	document.getElementById('curSong').innerHTML=songName;
}

function restartSong(){

	document.getElementById('curWord').innerHTML='';
	d=0;
	stopSinging=false;
	prntItOut='';
	prntItOut+=fullThing[d];
	d=1;
}

d=0;
stopSinging=false;
prntItOut='';
fullThing=defaultSong
prntItOut+=fullThing[d];
d=1;

document.getElementById('songSlct').value='defaultSong'

function playSong(){
	if(document.getElementById('curWord').innerHTML==fullThing.join("")){stopSinging=true;}
	if(!stopSinging){
		document.getElementById('curWord').innerHTML=prntItOut;
		prntItOut+=fullThing[d];
		d++;
	}
}
document