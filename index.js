function pressMe(){
    const text = "Hire Me As A Junior Engineer";  

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 0.5;

    window.speechSynthesis.speak(utterance);
}