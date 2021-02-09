//
// PLEDGE PROGRESS RELOADER
//
const progrs_win = document.getElementById( 'flightfreeuk-progress' );
window.addEventListener("message", (event) => {
    if (event.origin !== "https://www.jakemcmurchie.net" && event.origin !== "https://flightfree.exigo.se") {
        return false;
    }
    if( 'reload' !== event.data ) {
        return false;
    } else {
        progrs_win.src = progrs_win.src;
        return true;
    }
}, false);
