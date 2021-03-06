//smooth scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});

// fade effect
const faders = document.querySelectorAll('.fade-in');

const scroller = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) scroller.unobserve(entry.target)
        })
    },
    {
        threshold: 0.5
    }
)

faders.forEach(fade => {
    scroller.observe(fade);
})

//Fill headers bg
const fillers = document.querySelectorAll('.section-header-fill');

const header = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('load', entry.isIntersecting)
            if (entry.isIntersecting) header.unobserve(entry.target)
        })
    },
    {
        threshold: 0.5
    }
)

fillers.forEach(fade => {
    header.observe(fade);
})

//clients carousell
$('.clients-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});