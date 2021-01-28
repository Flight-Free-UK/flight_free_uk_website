//
// PLEDGE PROGRESS RELOADER
//
const progrs_win = document.getElementById( 'flightfreeuk-progress' );
window.addEventListener("message", (event) => {
    console.log( 'Reload instruction received: ' + event.data );
    if (event.origin !== "https://www.jakemcmurchie.net" && event.origin !== "https://flightfree.exigo.se") {
        console.log( 'Unrecognised origin for message')
        return false;
    }
    if( 'reload' !== event.data ) {
        console.log( 'Reload instruction not accepted');
        return false;
    } else {
        console.log( 'Reload instruction accepted');
        progrs_win.src = progrs_win.src;
        return true;
    }
}, false);
