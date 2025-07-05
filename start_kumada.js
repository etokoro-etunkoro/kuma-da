function startKumada(){
    let current = 0;
    let sentence = sentences[current];
    let correctCount = 0;
    let timer = 30;
    let intervalid = null;
    let starttime = null;
    
    const target = document.getElementById("target")
    const input = document.getElementById("input")
    const timerDisplay = document.getElementById("timer");
    const scoreDisplay = document.getElementById("score");

    


    intervalid = setInterval(() => {
        timer--;
        timerDisplay.textContent = '残り時間：${timer}秒';
        if(timer <= 0){
            clearInterval(intervalid);
            input.disabled = true;
            timerDisplay.textContent = 'time up'
            
        }

    })




    
}
