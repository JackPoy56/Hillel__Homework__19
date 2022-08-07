const hourFirstEl = document.querySelector('#hours > img:first-child');
const hourSecondEl = document.querySelector('#hours > img:last-child');

const minuteFirstEl = document.querySelector('#minutes > img:first-child');
const minuteSecondEl = document.querySelector('#minutes > img:last-child');

const secondFirstEl = document.querySelector('#seconds > img:first-child');
const secondSecondEl = document.querySelector('#seconds > img:last-child');

function getTimesNow() {
    const currentDate = new Date();
    
    let currentHours = String(currentDate.getHours());
    if (currentHours.length < 2) {
        currentHours = 0 + currentHours;
    }

    let currentMinutes = String(currentDate.getMinutes());
    if (currentMinutes.length < 2) {
        currentMinutes = 0 + currentMinutes;
    }

    let currentSeconds = String(currentDate.getSeconds());
    if (currentSeconds.length < 2) {
        currentSeconds = 0 + currentSeconds;
    }
    
    const fullTime = currentHours + currentMinutes + currentSeconds;
    
    return fullTime.split('').map(e => Number(e));
}

const timesNow = getTimesNow();

const time = {
    hours: {
        firstHour: timesNow[0],
        secondHour: timesNow[1]
    },
    minutes: {
        firstMinute: timesNow[2],
        secondMinute: timesNow[3]
    },
    seconds: {
        firstSecond: timesNow[4],
        lastSecond: timesNow[5]
    }
}

hourFirstEl.setAttribute('src', `img/numbers/number${time.hours.firstHour}.jpg`);
hourSecondEl.setAttribute('src', `img/numbers/number${time.hours.secondHour}.jpg`);


minuteFirstEl.setAttribute('src', `img/numbers/number${time.minutes.firstMinute}.jpg`);
minuteSecondEl.setAttribute('src', `img/numbers/number${time.minutes.secondMinute}.jpg`);

secondFirstEl.setAttribute('src', `img/numbers/number${time.seconds.firstSecond}.jpg`);
secondSecondEl.setAttribute('src', `img/numbers/number${time.seconds.lastSecond}.jpg`);


setInterval(function (){
    time.seconds.lastSecond ++; 
    
    if (time.seconds.lastSecond > 9) {        
        time.seconds.firstSecond == 5 && addMinutes();
        
        time.seconds.firstSecond ++;

        if (time.seconds.firstSecond > 5) {
            time.seconds.firstSecond = 0;                 
        } 
        
        secondFirstEl.setAttribute('src', `img/numbers/number${time.seconds.firstSecond}.jpg`);       
    }    
    
    if (time.seconds.lastSecond  > 9) {
        time.seconds.lastSecond = 0;
    } 
        
    secondSecondEl.setAttribute('src', `img/numbers/number${time.seconds.lastSecond}.jpg`);

}, 1000);

function addMinutes() {    
    time.minutes.secondMinute ++;
   
    if (time.minutes.secondMinute > 9) {
        time.minutes.firstMinute == 5 && addHours();  

        time.minutes.firstMinute ++;
        
        if (time.minutes.firstMinute > 5) {
            time.minutes.firstMinute = 0;         
        }        

        minuteFirstEl.setAttribute('src', `img/numbers/number${time.minutes.firstMinute}.jpg`);
    }
    
    if (time.minutes.secondMinute > 9) {
        time.minutes.secondMinute = 0;
    }

    minuteSecondEl.setAttribute('src', `img/numbers/number${time.minutes.secondMinute}.jpg`);
} 
    
function addHours() {    
    time.hours.secondHour ++;

    if (time.hours.secondHour > 9 || time.hours.firstHour == 2 && time.hours.secondHour > 3) {
        time.hours.secondHour = 0;
    } 

    hourSecondEl.setAttribute('src', `img/numbers/number${time.hours.secondHour}.jpg`);    
    
    if (time.hours.secondHour == 0) {       
        time.hours.firstHour ++;
        
        if (time.hours.firstHour > 2) {
            time.hours.firstHour = 0;                            
        }

        hourFirstEl.setAttribute('src', `img/numbers/number${time.hours.firstHour}.jpg`);
    }  
}