const input=document.getElementById("displaypwd");
const passlength=document.getElementById("lengthpass");
const clip_btn=document.getElementById("clipcopy");
const genpass_btn=document.getElementById("genpass");
const upper_chk_box=document.getElementById("upper");
const lower_chk_box=document.getElementById("lower");
const numeral_chk_box=document.getElementById("numberal");
const spl_chk_box=document.getElementById("special");


console.log("working");

const uppercaseletters="QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercaseletters="qwertyuiopasdfghjklzxcvbnm";
const numbercharacter=[7,8,9,4,5,6,1,2,3,0];
const splcharacters="~!@#$%^&*+-/";


function manipulate_pass () {
    const passtable=[];
    console.log(spl_chk_box.checked);
    if(upper_chk_box.checked)passtable.push(uppercaseletters);
    if(lower_chk_box.checked)passtable.push(lowercaseletters);
    if(numeral_chk_box.checked)passtable.push(numbercharacter);
    if(spl_chk_box.checked)passtable.push(splcharacters);
    // console.log("manipulate pass");
    // console.log(passtable[1][5]);
    // console.log(passtable[1].length);
    console.log(passtable);
    return passtable;

}


genpass_btn.addEventListener("click", ()=> {
    const arr=manipulate_pass();
    create_password(passlength.value,arr);
    console.log(passlength.value);
});

clip_btn.addEventListener("click", ()=>{
    console.log("button is pressed");
    input.select();
    document.execCommand("copy");
    console.log("has been copied to clipboard");
})

// our initial password

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function create_password (passlen=8,passtable){
    console.log(passtable);
    var pass="";
    // now we have to create a password of length 9
    for(var i=0;i<passlen;i++){
        // this loop will randomly choose an index corrosponding to which we get a selection
        const ind1=getRndInteger(0,passtable.length);
        const ind2=getRndInteger(0,passtable[ind1].length);
        const char=passtable[ind1][ind2];
        console.log("character is");
        console.log(char);
        pass+=char;
    }
    console.log("password obtained is :");
    console.log(pass);
    input.value=pass;
}
