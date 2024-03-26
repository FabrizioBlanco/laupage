document.addEventListener("DOMContentLoaded", () => {
    let daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    let actualDate = new Date()
    let dayNumer = actualDate.getDay()
    let actualDay = daysOfWeek[dayNumer]
    const errorMsj = document.getElementById("waydh")
    const hour = document.getElementById("hour")
    const min = document.getElementById("min")
    const sec = document.getElementById("sec")
    const lightBox = document.getElementById("lightBox")
    document.getElementById("weekday").innerText = actualDay
    if (actualDay === "Domingo" || actualDay === "Sábado") {
        errorMsj.innerHTML = `¡Es ${actualDay} Loca! ¡Raja de acá y volvé el próximo día laboral!`
    }
    // get actual time
    // let startHour = 12
    // let startMin = 29
    // let startSec = 55
    let startHour = actualDate.getHours()
    let startMin = actualDate.getMinutes()
    let startSec = actualDate.getSeconds()
    let lightBoxOn=false

    // set Working end hour at 12:30 PM
    let targetHour = 12
    let targetMin = 30
    let targetSec = 0

    // calc diff between actual time and working hour ends
    let hourLeft = targetHour - startHour
    let minLeft = targetMin - startMin
    let secLeft = targetSec - startSec

    //countdown timer
    function countDown() {
        const timer = setInterval(() => {        
            secLeft--
            // management negative values
            if (secLeft < 0) {
                secLeft += 60
                minLeft--
            }
            if (minLeft < 0) {
                minLeft += 60
                hourLeft--
            }
            if (hourLeft < 0) {
                hourLeft += 24
            }
            if (hourLeft === 0 && minLeft === 0 && secLeft === 0) {

                lightBox.style.display = "flex"
                lightBox.style.animationName = "lightBoxFalling"
                document.getElementById("clock").style.display = 'none'
                document.getElementById("hi").style.display = 'none'
                setTimeout(countDown, 5000)
            }else if ((hourLeft > 3 && hourLeft < 23) && !lightBoxOn ) {

                lightBox.style.display = "flex"
                lightBox.style.animationName = "lightBoxUp"
                lightBox.style.animationDuration = "10s"
                lightBox.style.animationFillMode = "forwards"
                lightBox.style.animationTimingFunction="ease-in"
                lightBoxOn = true
            }else{
                lightBoxOn = false
            }
            hour.innerText = hourLeft
            min.innerText = minLeft
            sec.innerText = secLeft
        }, 1000);
    }

    countDown()
})