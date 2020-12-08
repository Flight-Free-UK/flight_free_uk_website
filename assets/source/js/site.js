//
// PLEDGE PROGRESS RELOADER
//
const progrs_win = document.getElementById( 'flightfreeuk-progress' );
window.addEventListener("message", (event) => {
    if (event.origin !== "https://www.jakemcmurchie.net") {
        console.log( 'Unrecognised origin for message')
        return false;
    }
    if( 'reload' === event.data ) {
        console.log( 'Reload instruction received');
        progrs_win.src = progrs_win.src;
    }
}, false);
