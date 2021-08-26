 player1_name=localStorage.getItem("player1");
 player2_name=localStorage.getItem("player2");
 var player1_score=0;
 var player2_score=0;
 document.getElementById("player1_name").innerHTML=player1_name + ":";
 document.getElementById("player2_name").innerHTML=player2_name + ":";
 document.getElementById("player1_score").innerHTML=player1_score;
 document.getElementById("player2_score").innerHTML=player2_score;
 document.getElementById("player_question").innerHTML="Question Turn-" + player1_name;
 document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;
  function Send() {
      get_word=document.getElementById("word").value;
      word=get_word.toLowerCase();
      console.log("Word in lowercase=" + word) ;
      Charat1=word.charAt(1);
      

      length_divide_2_of_the_word=Math.floor(word.length/2);
      Charat2=word.charAt(length_divide_2_of_the_word);
      
          
      lenght_minus_1=word.length - 1 ;
      Charat3=word.charAt(lenght_minus_1);
      
      lenght_minus_3=word.length - 3;
      Charat4=word.charAt(lenght_minus_3);
      console.log(lenght_minus_3);
      console.log(Charat4)

    

      remove_one=word.replace(Charat1 , "_");
      console.log(remove_one)
      remove_two=remove_one.replace(Charat2 ,"_" );
      console.log(remove_two)
      remove_two_length=remove_two.length;
      console.log(remove_two_length);
      remove_three=remove_two.replace(Charat3 , "_");
      console.log(remove_three);
      remove_four=remove_three.replace(Charat4 , "_");
      console.log(remove_four)
    
      question_word="<h4 id='word_display' Q : >" + remove_four + "</h4>"
      input_box=" <br> Answer:<input type='text' id='input_checkbox'>";
      check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
      row=question_word+input_box+check_button;
      document.getElementById("output").innerHTML=row;
      document.getElementById("word").value="";

  }
  question_turn="player1";
  answer_turn="player2"


  function check() {
get_answer= document.getElementById("input_checkbox").value;
answer=get_answer.toLowerCase();
console.log("answer in lowercase is -" + answer);
if (answer==word){

if(answer_turn=="player1"){
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTML=player1_score
}
else{
    player2_score=player2_score+1
    document.getElementById("player2_score").innerHTML=player2_score
}
if (question_turn=="player1"){
question_turn="player2"
document.getElementById("player_question").innerHTML="Question Turn -" + player2_name
  }
  else {
    question_turn="player1"
document.getElementById("player_question").innerHTML="Question Turn -" + player1_name  
  }
  if (answer_turn=="player1"){
answer_turn="player2"
document.getElementById("player_answer").innerHTML="Answer Turn -" + player2_name
  }
  else {
    answer_turn="player1"
document.getElementById("player_answer").innerHTML="Answer Turn -" + player1_name  
  }
  document.getElementById("output").innerHTML="";
}
}