function parallax(event) {
    this.querySelectorAll('.parallax__layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/10}px)`
    })
}

document.addEventListener('mousemove', parallax);