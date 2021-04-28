'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const featured_slider_items = document.querySelectorAll('.featured .controller .item')
    const featured_article_items = document.querySelectorAll('.featured .articles .article')
    const featured_articles = document.querySelector('.featured .articles')

    featured_articles.addEventListener('scroll', function () {
        const startingPoint = this.getBoundingClientRect().left
        const fullWidth = this.getBoundingClientRect().width
        featured_article_items.forEach((item, index) => {
            function getAndCheck() {
                let itemLeft = item.getBoundingClientRect().left
                if(itemLeft >= startingPoint
                   && itemLeft < startingPoint + .5 * fullWidth) {
                    featured_slider_items.forEach(button => {
                        button.classList.remove('active')
                    })
                    featured_slider_items[index].classList.add('active')
                }
            }
            setTimeout(getAndCheck, 200)
        })
    })
})