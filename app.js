window.onload = function () {
    let seconds = 00;
    let mils = 0;

    let appendSeconds = document.getElementById('seconds');
    let appendMils = document.getElementById('mils');
    let buttonStart = document.getElementById('start');
    let buttonStop = document.getElementById('stop');
    let buttonRestart = document.getElementById('restart');
    let tim = [];
    let goalMark = {};
    let num = 0;
    let interval;
    let pause = true;

    buttonStart.onclick = () => {
        if (pause) {
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
            buttonStart.innerHTML = 'Pause';
            pause = false;
        } else {
            buttonStart.innerHTML = 'Start';
            clearInterval(interval);
            pause = true;
        }
    };

    buttonStop.onclick = () => {
        goalMark.sec = seconds;
        goalMark.mis = mils;
        num += 1;
        let txt = document.createElement('p');
        txt.textContent = `${num}. Scorce : ${goalMark.sec} sec : ${goalMark.mis}`;
        document.querySelector('p').appendChild(txt);
    };

    buttonRestart.onclick = () => {
        clearInterval(interval);
        seconds = '00';
        mils = '00';

        appendSeconds.innerHTML = seconds;
        appendMils.innerHTML = mils;
    };

    function startTimer() {
        mils++;

        if (mils <= 9) {
            appendMils.innerHTML = '0' + mils;
        }
        if (mils > 9) {
            appendMils.innerHTML = mils;
        }
        if (mils > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            if (seconds > 9) {
                appendSeconds.innerHTML = seconds;
            }
            mils = 0;
            appendMils.innerHTML = '0' + mils;
        }
    }
};
