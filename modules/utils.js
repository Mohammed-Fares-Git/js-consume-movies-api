export function expendCard (arrow,text,card){
    const className = "arrow-expended";
     if (arrow.classList.contains(className)){
        arrow.classList.remove(className);
        text.classList.add("collapsed");
        text.classList.remove("trans-card-content");
     } else {
        collapseAll("collapsed",arrow);
        arrow.classList.add(className);
        text.classList.add("trans-card-content");
        text.classList.remove("collapsed");

     }

     
}


function collapseAll(arrow) {
    const elements = document.querySelectorAll('.trans-card-content');
    elements.forEach(function(element) {
        element.classList.add("collapsed");
        element.classList.remove("trans-card-content");
    });
    const elements2 = document.querySelectorAll('.arrow-expended');
    elements.forEach(function(element2) {
        element2.classList.remove("arrow-expended");
    });
}

export function observeItems(items) {


    const options = {
        root: document.getElementById("root"),
        //rootMargin: '300px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver(revealCallback, options);


    items.forEach(item => {
        observer.observe(item);
    });
}


function revealCallback(entries, observer) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            console.log(index);
            entry.target.classList.toggle('apear',entry.isIntersecting);
            //observer.unobserve(entry.target); 
        }
    });
}