const timer=document.getElementById("timer");
const quote_display=document.getElementById("quote-display");
const quote_input=document.getElementById("quote-input");
const speed=document.getElementById("speed");
console.log("should work");

var curr_timer=0;
// a function that increases the value of timer every second
function inc_timer (){
    curr_timer++;
    timer.innerHTML=curr_timer;
}
setInterval(inc_timer,1000);

var quote_text="";
var strt_time;
function get_qutoe(){
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        // if the promise for getting a response is resolved
        // then return the response in json format
        .then(data => {
            // if promise of getting data in json format is resolved
            // print the content of data
            quote_text=data.content;
            quote_display.innerText=quote_text;
        }
    )
    strt_time=new Date();
}
get_qutoe();


quote_input.addEventListener('input' , () => {
    quote_display.innerHTML="";
    const curr_input_text=quote_input.value;
    const total_len=curr_input_text.length;
    console.log(curr_input_text);
    console.log(total_len);
    let curr_ind=0;
    quote_text.split('').forEach(character =>{
        const char_span=document.createElement('span');
        char_span.innerText=character;
        if(curr_ind<total_len){
            if(character==curr_input_text[curr_ind]){
                char_span.classList.add('correct');
            }
            else{
                char_span.classList.add('incorrect');
            }
            curr_ind++;
        }
        quote_display.appendChild(char_span);
    });
    if(curr_input_text==quote_text){
        // change quote and empty the text area input
        var fin_time=new Date();
        const mins=(fin_time-strt_time)/60000;
        console.log("words per minute is :");
        console.log(Math.floor((curr_input_text.length/5)/mins));
        speed.innerHTML=Math.floor((curr_input_text.length/5)/mins);
        get_qutoe();
        quote_input.value="";
        curr_timer=0;

    }
});



