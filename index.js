var readlineSync= require("readline-sync");
var chalk=require("chalk");
var score=0;
var userName= readlineSync.question(chalk.cyan("Wha's your name: "));
console.log(chalk.cyan("Hi, "+ chalk.red(userName)+ ". Let's see how much you know Rishabh?"));
function play(question, answer){
  var userAns= readlineSync.question(question);
if(userAns===answer){
  console.log(chalk.black.bgGreen("Good, on point!!"));
  score++;
}else{
  console.log(chalk.bgRed("You know nothing "+userName));
  // score--;
}
}
var questions=[{
  question: chalk.blue("What is Rishabh's Age:         a.23   b.24  c.25  d.22  Ans: "),
  answer: "b"
},{
  question: chalk.blue("Where do I live:                                                        a.Haridwar   b.Dehradun   c.Roorkee   d.Rishikesh  Ans: "),
  answer: "c"
},{
  question: chalk.blue("I have done my Btech in:                                                a.Mechanical   b.Computer Science   c.Electrical   d.Civil    Ans: "),
  answer: "a"
},{
  question: chalk.blue("Who is my Fav Singer                                                    a.Jubin   b.Shaan   c.Himesh   d.Arijit  Ans: "),
  answer: "d"
}]
for(var i=0;i<questions.length;i++){
  var currentQuestion= questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("Your final score is: "+ score);

