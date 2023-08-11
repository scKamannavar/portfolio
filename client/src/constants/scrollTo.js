export default (elementRef) =>{
    const section = document.querySelector( elementRef );
    section.scrollIntoView( { behavior: 'smooth', block: 'start',inline: "nearest" } );
    // elementRef.scrollIntoView( { behavior: 'smooth', block: 'start' } );
}

