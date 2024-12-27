let btn = document.querySelector('.btn-mic');
let content = document.querySelector('#content');
let voiceAnimation = document.querySelector('.animation');


function speak(text) {
    let msg = new SpeechSynthesisUtterance(text);
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}

let speachrecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speachrecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript

    takeCommand(transcript.toLowerCase())
    
}

btn.addEventListener('click', () => {
   recognition.start();   
   btn.style.display = 'none';
   voiceAnimation.style.display = 'block';

})

function takeCommand(message){

    btn.style.display = 'flex';
    voiceAnimation.style.display = 'none';

    if(message.includes('hello')||message.includes('hallo')||message.includes('hay')||message.includes('hai')||message.includes('hi')){
        speak('Hello Dear, how are you?')  
    }
    
    else if(message.includes('im fine')||message.includes('im good')||message.includes('doing great')||message.includes('im okay')||message.includes('im ok')||message.includes('i am fine')||message.includes('i am good')||message.includes('i am okay')||message.includes('i am ok')){
        speak('Happy to know youre doing well')  
    }
    else if(message.includes('thank you')||message.includes('thank')||message.includes('thanks')||message.includes('thank you so much')||message.includes('thank you very much')){
        speak('Always here for you.')  
    }
     else if(message.includes('who are you')||message.includes('hu r u')||message.includes('what is your name')){
        speak('Im Nova your virtual assistant, created by mubbashir sir')
    }
     else if(message.includes('open youtube')||message.includes('youtube open')||message.includes('open a youtube')||message.includes('open the youtube')||message.includes('opening a youtube')||message.includes('opening  youtube')||message.includes('go youtube')||message.includes('lets go youtube')||message.includes("let's go youtube")||message.includes("start youtube")||message.includes("start youtube")||message.includes("start a youtube")||message.includes("youtube start")){
        speak('opening youtube')
        window.open('https://www.youtube.com', '_blank');

    }
     else if(message.includes('open facebook')||message.includes('facebook open')||message.includes('open a facebook')||message.includes('open the facebook')||message.includes('opening a facebook')||message.includes('opening  facebook')||message.includes('go facebook')||message.includes('lets go facebook')||message.includes("let's go facebook")||message.includes("start facebook")||message.includes("start facebook")||message.includes("start a facebook")||message.includes("facebook start")){
        speak('opening facebook')
        window.open('https://www.facebook.com', '_blank');

    }
     else if(message.includes('open instagram')||message.includes('instagram open')||message.includes('open a instagram')||message.includes('open the instagram')||message.includes('opening a instagram')||message.includes('opening  instagram')||message.includes('go instagram')||message.includes('lets go instagram')||message.includes("let's go instagram")||message.includes("start instagram")||message.includes("start instagram")||message.includes("start a instagram")||message.includes("instagram start")){
        speak('opening instagram')
        window.open('https://www.instagram.com', '_blank');

    }
     else if(message.includes('open google')||message.includes('google open')||message.includes('open a google')||message.includes('open the google')||message.includes('opening a google')||message.includes('opening  google')||message.includes('go google')||message.includes('lets go google')||message.includes("let's go google")||message.includes("start google")||message.includes("start google")||message.includes("start a google")||message.includes("google start")){
        speak('opening google')
        window.open('https://www.google.com', '_blank');

    }
     
     else if(message.includes('open twitter')||message.includes('twitter open')||message.includes('open a twitter')||message.includes('open the twitter')||message.includes('opening a twitter')||message.includes('opening  twitter')||message.includes('go twitter')||message.includes('lets go twitter')||message.includes("let's go twitter")||message.includes("start twitter")||message.includes("start twitter")||message.includes("start a twitter")||message.includes("twitter start")){
        speak('opening twitter')
        window.open('https://www.twitter.com', '_blank');

    }
     else if(message.includes('open chatgpt')||message.includes('chat gpt open')||message.includes('open a chat gpt')||message.includes('open the chat gpt')||message.includes('opening a chat gpt')||message.includes('opening  chat gpt')||message.includes('go chat gpt')||message.includes('lets go chat gpt')||message.includes("let's go chat gpt")||message.includes("start chat gpt")||message.includes("start chat gpt")||message.includes("start a chat gpt")||message.includes("chat gpt start")||message.includes("open chat gpt")||message.includes("open chat gbt")){
        speak('opening chat gpt')
        window.open('https://chatgpt.com', '_blank');

    }
    else if(message.includes('open calculator')||message.includes('chat gpt open')||message.includes('open a chat gpt')||message.includes('open the chat gpt')||message.includes('opening a chat gpt')||message.includes('opening  chat gpt')||message.includes('go chat gpt')||message.includes('lets go chat gpt')||message.includes("let's go chat gpt")||message.includes("start chat gpt")||message.includes("start chat gpt")||message.includes("start a chat gpt")||message.includes("chat gpt start")||message.includes("open chat gpt")||message.includes("open chat gbt")){
        speak('opening calculator')
        window.open('calculator://');

    }
    else if(message.includes('open visual studio')||message.includes('chat gpt open')||message.includes('open a chat gpt')||message.includes('open the chat gpt')||message.includes('opening a chat gpt')||message.includes('opening  chat gpt')||message.includes('go chat gpt')||message.includes('lets go chat gpt')||message.includes("let's go chat gpt")||message.includes("start chat gpt")||message.includes("start chat gpt")||message.includes("start a chat gpt")||message.includes("chat gpt start")||message.includes("open chat gpt")||message.includes("open chat gbt")){
        speak('opening visual studio')
        window.open('visual Studio://');

    }
    else if(message.includes('open file explorer')||message.includes('chat gpt open')||message.includes('open a chat gpt')||message.includes('open the chat gpt')||message.includes('opening a chat gpt')||message.includes('opening  chat gpt')||message.includes('go chat gpt')||message.includes('lets go chat gpt')||message.includes("let's go chat gpt")||message.includes("start chat gpt")||message.includes("start chat gpt")||message.includes("start a chat gpt")||message.includes("chat gpt start")||message.includes("open chat gpt")||message.includes("open chat gbt")){
        speak('opening file explorer')
        window.open('file explorer://');

    }
    
    else{
       speak(`this is what i found on internet regarding${message.replace("nova","")}`) 
       window.open(`https://www.google.com/search?q=${message.replace("nova","")}`, '_blank');
    }
   
    
  

}