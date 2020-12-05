
//
// PLEDGE PROGRESS RELOADER
//
console.log( 'Flight Free UK waiting...');
const progrs_win = document.getElementById( 'flightfreeuk-progress' );
window.addEventListener("message", (event) => {
    console.log( 'Message received: '+event.data );
    if (event.origin !== "https://www.jakemcmurchie.net") {
        console.log( 'Unrecognised origin for message')
        return false;
    }
    if( 'reload' === event.data ) {
        console.log( 'Reload instruction received...');
        console.log( 'Reloading '+progrs_win+' with '+progrs_win.src);
        progrs_win.src = progrs_win.src;
    }
}, false);
