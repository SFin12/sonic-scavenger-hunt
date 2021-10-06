export const dialog = [
    {
      //0 (sonic)
      question: "First you all need to find Sonic's shoes so he can run as fast as possible. Hmm, where would you put your shoes Sonic? See anything on them?",
      answer: "767",
      response: "Good, you found the shoes!... ",
      wrongAnswer: "Hmm that doesn't seem right, are you sure you have Sonic's shoes? Type the number on the shoes."
    },
    {
      //1 (sonic) speed or s
      question: "Now we need to find out what the 767 means. HEY! STOP WATCHING SONIC AND PAY ATTENTION! Ask an adult and let me know what they say. Hurry, I'm going to be sick watching Sonic run in circles!",
      answer: "speed of sound",
      response: "That's right, we need Sonic to run the speed of sound to get across the country to Dr. Eggman's lab...",
      wrongAnwer: "Hmm that doesn't seem right, ask another adult or try typing it in again. SONIC PLEASE STOP!"
    },
    {
      //2 (amy) how many keys?
      question: "Now the trick is to find the keys to Dr. Eggman's lab. I know of an unhappy former employee of \
      Dr. Eggman. His name is Dr. Paul Finegan, he might know where the keys are. Amy Rose, I think \
      you should go talk to him. Come back when you find them and tell me how many you have.",
      answer: "3",
      response: "Awesome, those are his keys!",
      wrongAnswer: "Hmm I don't think those are his keys, keep looking."
    },
]

window.eggmanText =
"I'm coming for you Sonic! You and all your little friends! With my robots I will rule the \
WORLD!... \nWait a second, are guys celebrating a birthday party?\n...psst you have to press Enter";

window.currentArr = 11;
window.question = 0;
window.answer = 1;
window.response = 2;
window.wrongAnswer = 3;


const oldQnA=[
    [
      //0 (sonic)
      "First you all need to find Sonic's shoes so he can run as fast as possible. Hmm, where would you put your shoes Sonic? See anything on them?",
      "767",
      "Good, you found the shoes!... ",
      "Hmm that doesn't seem right, are you sure you have Sonic's shoes? Type the number on the shoes.",
    ],
    [
      //1 (sonic) speed or s
      "Now we need to find out what the 767 means. HEY! STOP WATCHING SONIC AND PAY ATTENTION! Ask an adult and let me know what they say. Hurry, I'm going to be sick watching Sonic run in circles!",
      "speed of sound",
      "That's right, we need Sonic to run the speed of sound to get across the country to Dr. Eggman's lab...",
      "Hmm that doesn't seem right, ask another adult or try typing it in again. SONIC PLEASE STOP!",
    ],
    [
      //2 (amy) how many keys?
      "Now the trick is to find the keys to Dr. Eggman's lab. I know of an unhappy former employee of \
      Dr. Eggman. His name is Dr. Paul Finegan, he might know where the keys are. Amy Rose, I think \
      you should go talk to him. Come back when you find them and tell me how many you have.",
      "3",
      "Awesome, those are his keys!",
      "Hmm I don't think those are his keys, keep looking.",
    ],
    [
      //3 computer code?
      "When you get to the lab, look for his main computer. Once you find it, you will need to bring it back here and type in the password that's on the back of it.",
      "2468",
      "Perfect, now we can use his own technology against him!",
      "I think you have the wrong computer, look around some more.",
    ],
    [
      //4 (shadow) megaphone
      "Shadow, we are going to need your skills. To create the Sonic Boom we are going to \
      need a giant megaphone to create the sound wave. Go to the Army Depot to find one. Let \
      me know what color you get when you come back. I'm very particular about what color \
      parts I use.",
      "white",
      "Oh good, that's my favorite color! Nice and clean.",
      "Ugh, I don't like that color, I can't use it. Try again.",
    ],
    [
      //5 (silver) corvette engine size
      "Silver, why don't you take the lead on this one. We need an engine to power everything. \
      I think a Corvette engine should be enough power. SILVER, are you listening? Go ask Jason the Mechanic what type \
      of engine that is in a corvette...Silver, HELLO???",
      "V8",
      "That should do the trick. I bet you and your team can find one in the junk yard outside \
      your base. Have Knuckles lead the way, he's got an eye for these sorts of things.",
      "What?! This guy knows nothing. Go ask someone else.",
    ],
    [
      //6 y/n
      "Did you find the engine?",
      "yes",
      "Great!",
      "It's a simple question, yes or no. Why are you still here then?",
    ],
    [
      //7 engine part number
      "Let's get this Sonic Boom machine built. Let's double check the part number first.",
      "7V8",
      "Yup, that's the one.",
      "Uhhhh, I said Corvette engine not scooter. Try typing that again.",
    ],
    [
      //8 bunny parts identification
      "Hey Bunny, I got something in my eye and need your help to identify the correct parts.\
      Is this the computer?",
      "yes",
      "Ok good.",
      "Are you sure?",
    ],
    [
      //9 underwear
      "Are these the keys?",
      "no",
      "Whoops, that wasn't supposed to happen. I better put those in the hamper.",
      "Huh, why do they have such a funny smell?",
    ],
    [
      //10 (blaze) satelite, response = print eggman
      "Finally, I got the dirt out of my eye. It's time to get the satellite online. Blaze \
      you're a tech genious, go find Director Lucketta for the location of the satellite. Once \
      you find it, enter the coordinates you find on the back. Just don't burn anything down!",
      "95655",
      "Alright, the satellite is online! Well this is strange, we are getting a message... it \
      looks like it is coming from.... Dr. Eggman!",
      "I tried inputting those coordinates but it didn't work. Check again.",
    ],
    [
      //11 build sonic blaster
      "We better hurry, we don't have a lot of time left. Squirrel, start handing me the parts and I'll put them together.",
      "none",
      "Okay, I think I have it all together. All we need to do is start it up and direct the sonic blast toward \
      Dr. Egggman's ship.",
    ],
  ];