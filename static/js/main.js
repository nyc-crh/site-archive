const footnotes = document.querySelector('.footnotes');
const footnotesLinks = document.querySelectorAll('a.footnote-ref')

if(footnotes){
    const reference=  document.querySelector('#flush-collapseTwo > .accordion-body');
    reference.appendChild(footnotes);

}


footnotesLinks.forEach(footnote=>{
    footnote.addEventListener('click',e=>{
        e.preventDefault();
        const url= footnote.getAttribute('href');
        const reference=  document.querySelector('#flush-collapseTwo');
        const btn = document.querySelector('#flush-headingTwo > .accordion-button')
        if(reference.classList.contains('collapse'))
            reference.classList.add('show');
        btn.setAttribute('aria-expanded', true);
        btn.classList.remove('collapsed');

        window.location = url;
    })
})