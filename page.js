function onLoadIntro() {
    var introOverlay = document.getElementById("intro");
    
    if(!sessionStorage.beenHere) {
        sessionStorage.beenHere = true;
    }
    else {
        introOverlay.hidden = true;
    }
}