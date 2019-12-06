var happyBtn = document.querySelector('.happy');
var sillyBtn = document.querySelector('.silly');
var sadBtn = document.querySelector('.crying');
var message = document.querySelector('.message');

happyBtn.addEventListener('click', sendHappyMessage);
sillyBtn.addEventListener('click', sendSillyMessage);
sadBtn.addEventListener('click', sendSadMessage);


function sendHappyMessage(){
  var happyMessageArray = ["You go!", "Your smile just cheered me up!", "YAY!"];
  var randomHappyMessage = happyMessageArray[Math.floor(Math.random()*happyMessageArray.length)];
  message.innerText = randomHappyMessage;
}

// Explanation so I don't forget how I got this answer:
// Setting a variable for the entire array, then setting the
// message variable to access an index number within that array via [i],
// but instead of [i] there is a random number generator set to pick
// a random number between 0 and 1 (Math.random() does this while Math.floor
// rounds it to the nearest whole number. Multiplying this by the length of
// the array sets the possible range to include the entire array (in this case,
// [i] can equal any index position between 0 and 2). Because there are only
// three possible answers for the array, sometimes the message does not change
// on the next click but will likely change in the following clicks.

function sendSillyMessage(){
  var sillyMessageArray = ["Interesting response", "Sounds ... good?", "Me too."];
  var randomSillyMessage = sillyMessageArray[Math.floor(Math.random()*sillyMessageArray.length)];
  message.innerText = randomSillyMessage;
}

function sendSadMessage(){
  var sadMessageArray = ["Do you want to talk?", "Keep your head up!", "We can cry together!", "What can I do?"];
  var randomSadMessage = sadMessageArray[Math.floor(Math.random()*sadMessageArray.length)];
  message.innerText = randomSadMessage;
}
