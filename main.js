const container = document.querySelector('.side-panel-container');
const canvas_section = document.querySelector('.canvas-section');
const resizer = document.querySelector('.panel-resizer');

function resizeDiv(){
    resizer.addEventListener('mousedown', function(e) {
        window.addEventListener('mousemove', resize);
    })
    window.addEventListener('mouseup', stopResize);
}

function resize(e){
    if(e.pageX >= 20){
        container.style.width = e.pageX + 'px';
        canvas_section.style.width = document.body.clientWidth - e.pageX + 'px';
    } 
    else return;
}

function stopResize() {
    window.removeEventListener('mousemove', resize)
}

resizeDiv();