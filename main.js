document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var typewriter = new Typewriter('.role-container', {
        loop: true, 
        delay: 75,  
        deleteSpeed: 50, 
    });

    
    typewriter
        .typeString('Trainer & Educator') 
        .pauseFor(1500) 
        .deleteAll() 
        .typeString('DevOps & Cloud Practitioner') 
        .pauseFor(1500) 
        .deleteAll() 
        .typeString('App Developer') 
        .pauseFor(1500) 
        .deleteAll() 
        .typeString('Software Engineer') 
        .pauseFor(1500) 
        .deleteAll()
        .start(); 
});