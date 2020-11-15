const questionEl = document.getElementById("question") 
const opt1El = document.getElementById("opt1");
const opt2El = document.getElementById("opt2");
const opt3El = document.getElementById("opt3");
const opt4El = document.getElementById("opt4");
const sub_btn = document.getElementById("submit");
const inpt_opt4=document.getElementById("option4");
// quiz data 
const quiz_data = [
    // an array of question_answeres objects
    {
        question : "Prime minister of India",
        a : "Nathu Ram godse",
        b : "pappu gandhi",
        c : "narendra modi",
        d : "Amit shah",
        correct_ans : "c",
    },
    {
        question: "Which year was the kargil war fought",
        a:"1998",
        b:"1996",
        c:"1995",
        d:"1999",
        correct_ans:"d",
    },
    {
        question: "Who rescieved Bhrat Ratna in 1962",
        a : "Indra Gandhi",
        b : "Zakir Hussain",
        c : "Morarji Desai",
        d : "Rajendra Prasad",
        correct_ans : "d",
    },
    {
        question : "In which year did doklam standoff take place",
        a : "2018",
        b : "2017",
        c : "2016",
        d : "2015",
        correct_ans : "b",
    },
    {
        question : "When was CAA pased by indian parliament",
        a:"15 december 2019",
        b:"20 december 2019",
        c:"5 August 2019",
        d:"11 december 2019",
        correct_ans : "d",
    },
];

// put the relevant fields equal to object and compare whenever button is pressed
let ques_index=0;
put_display_data();
function put_display_data(){
    ques_data=quiz_data[ques_index];
    questionEl.innerHTML = ques_data.question;
    opt1El.innerHTML = ques_data.a;
    opt2El.innerHTML = ques_data.b;
    opt3El.innerHTML = ques_data.c;
    opt4El.innerHTML = ques_data.d;
    
};

function des_opt (){
    var answerEls=document.getElementsByTagName("input");
    for(let i=0;i<answerEls.length;i++){
        answerEls[i].checked=false;
    }
};


var corr_ans_count=0;
function show_result (){
    alert('test complete your correct ans count '+ corr_ans_count + ' out of 5');
};

function get_selected(){
    console.log("inside get_selected");
    var answerEls=document.getElementsByTagName("input");
    console.log(answerEls);
    var cndn=false;
    for(let i=0;i<answerEls.length;i++){
        if(answerEls[i].checked){
            cndn=true;
            console.log("checked found");
            console.log(answerEls[i].id);
            return answerEls[i].id;
        }
    }
    if(!cndn)return "wrong ans";   
    
};



submit.addEventListener("click",() => {
    var answer=get_selected();
    // make every other option deselected
    des_opt();
    console.log(answer);
    console.log(quiz_data[ques_index].correct_ans);
    if(answer==quiz_data[ques_index].correct_ans){
        corr_ans_count++;
        console.log("answer matches");
    }
    else console.log("wrong ans_after submit");
    ques_index++;
    ques_index<quiz_data.length ? put_display_data() : show_result() ;
    }
    
    
    
    
    // this should only be called after one of the option is selected
);

