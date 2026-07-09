const faqsHeaders = Array.from(document.querySelectorAll('.faq__header'))

for (const faqHeader of faqsHeaders) {
    faqHeader.addEventListener('click', () => {
        const faqDescription = faqHeader.parentElement.querySelector('.faq__description')
        if (faqDescription.classList.contains('show')) {
            faqHeader.querySelector('img').setAttribute('src', './assets/images/icon-plus.svg')
            faqDescription.classList.remove('show')
        } else {
            faqHeader.querySelector('img').setAttribute('src', './assets/images/icon-minus.svg')
            faqDescription.classList.add('show')
        }
        
    })
}