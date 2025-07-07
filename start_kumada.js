function startKumada(){
    let sentence = ["これより、寮生大会を開始する。まず、議長団の選出を行う。立候補する者は挙手を。"];
    let current = 0;
   // let sentence = sentences[current];
   // let correctCount = 0;
    let timer = 30;
    let intervalid = null;
    let startTime = null;
    
    const target = document.getElementById("target")
    const input = document.getElementById("input")
    const timerDisplay = document.getElementById("timer");
    const scoreDisplay = document.getElementById("score");

    


    intervalid = setInterval(() => {
        timer--;
        timerDisplay.textContent = `残り時間：${timer}秒`;
        if(timer <= 0){
            clearInterval(intervalid);
            input.disabled = true;
            timerDisplay.textContent = `time up`
        }
    }, 1000);

    input.addEventListener("keydown", (e) =>{
    console.log("キー押された:", e.key); 
    if(e.key === "Enter"){
        if (input.value === sentence){
            console.log("あってる");
            correctCount += sentence.length;
            scoreDisplay.textContent = `スコア；${correctCount}`;
            current = (current + 1) % sentences.length;
            sentence = sentences[current];
            input.value = "";
            updateTarget();
        } else{
            // そのまま入力可
            
        }
    } else if (startTime === null){
        startTime = Date.now();
        startTimer();
    }
});
}



// updateTarget();