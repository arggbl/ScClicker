
function squish() {
    let img = document.getElementById('zerb')
    img.width = 480
    img.height = 400
    setTimeout(function() { unSquish(); }, 1000)
}
function unSquish() {
    let img = document.getElementById('zerb')
    img.width = 480
    img.height = 480
}

function MinClicked() {
    squish()
}
