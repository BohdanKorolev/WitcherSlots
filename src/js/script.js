(function () {
    let scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene, {
        limitY: 0,
    });
    let codeButton = document.getElementById('copy');
    codeButton.addEventListener('click', CopyCode);
})();

function CopyCode() {
    let code = document.getElementById('input');
    code.select();
    code.setSelectionRange(0, 99999);
    document.execCommand('copy');
}