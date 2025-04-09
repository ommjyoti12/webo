prompt("ok");
let i=0;
while(i<20){
    console.log(i);
    i++;
}
let fav="avtar";
let guss =prompt("enter the movie");
while((fav!=guss)&&(guss!="quit")){
 console.log("no");
 guss=prompt("retry");
}
if(guss==fav){
 alert("congras");
}
else{console.log("nooooooooooooo");}