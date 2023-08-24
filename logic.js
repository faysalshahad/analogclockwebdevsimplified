/**Calling the setClock function every second */
setInterval(setClock, 1000);

const
hourHand = document.querySelector("[data-hour-hand]"),
minuteHand = document.querySelector("[data-minute-hand]"),
secondHand = document.querySelector("[data-second-hand]");

window.onload = setClock();

function setClock(params) {
    /**Getting the current time and date by using date function.*/
    const currentDate = new Date();
    /**Since there are 60 seconds in a minute we are dividing the following 
     * code by 60 and we will use this to rotate our seconds hand in clock*/
    const secondRatio = currentDate.getSeconds() / 60;
    /**We are adding secondRatio to the next calculation so that our minutes
     * hand in the clock can gradually move around the clock juts like a real
     * life analog clock.
     * Also, Since there are 60 minutes in a hours we are dividing the 
     * following code by 60 */
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    /**We are adding minuteRatio to the next calculation so that our hours
     * hand in the clock can gradually move around the clock juts like a real
     * life analog clock.
     * Also, Since there are 12 digits or hour in a analog we are dividing the 
     * following code by 12*/
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
};

function setRotation(element, rotationRatio) {
    /**We are setting the CSS property --rotation variable. 
     * Multiplying it by 360 degree because in an analog clock it is
     * 0 degree to 360 degree.*/
    element.style.setProperty("--rotation", rotationRatio * 360);
};