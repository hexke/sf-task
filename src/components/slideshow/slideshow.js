import classes from './slideshow.module.css';
import slideOne from '../../img/slide1-big.jpg';
import slideTwo from '../../img/slide2-big.jpg';
import { useEffect } from 'react';
import Slide from './slide';

const Slideshow = () => {

    useEffect(() => {
        let nav;
        let slides;
        let currentSlide = 0;

        const changeSlide = (index) => {
            if (currentSlide === index) return;
            slides[currentSlide].classList.remove(`${classes.active}`);
            setTimeout(() => {
                slides[currentSlide].style.zIndex = -1;
                slides[index].style.zIndex = 1;
                setTimeout(() => {
                    slides[index].classList.add(`${classes.active}`);
                }, 0);
            }, 100);
            currentSlide = index;
        }

        const initNav = () => {
            nav = document.querySelector('.slideNav');
            slides = [...document.querySelectorAll('.slide')];

            [...document.querySelectorAll('.slide')].forEach((slide, index) => {
                let span = document.createElement('span');
                span.id = `slide-${index}`;
                nav.appendChild(span);
                span.addEventListener("click", () => { changeSlide(index) });
            });
        };

        const keydownHandler = (e) => {
            console.log(currentSlide === slides.length - 1, e.key === "ArrowRight");
            if (e.key === "ArrowRight") {
                if (currentSlide === slides.length - 1) {
                    changeSlide(0);
                } else {
                    changeSlide(currentSlide + 1);
                }
            }

            if (e.key === "ArrowLeft") {
                if (currentSlide === 0) {
                    changeSlide(slides.length - 1);
                } else {
                    changeSlide(currentSlide - 1);
                }
            }
        }

        initNav();
        document.addEventListener("keydown", keydownHandler);

        return () => {
            nav.innerHTML = '';
            document.removeEventListener("keydown", keydownHandler);
        }
    }, []);


    return (
        <div className={classes.slideshow}>
            <Slide className={`slide ${classes.slide} ${classes.active}`} imageSrc={slideOne} imageAlt="">
                <p className={classes.text}>Bez kompromisu<br />Idealnie takie jak lubisz.
                </p>
                <p>Keune <span>design</span></p>
            </Slide>
            <Slide className={`slide ${classes.slide}`} imageSrc={slideTwo} imageAlt="">
                <p className={classes.text}>Bez kompromisu<br />Idealnie takie jak lubisz.
                </p>
                <p>Keune <span>design</span></p>
            </Slide>
            <div className={`slideNav ${classes.slideNav}`}>
            </div>
        </div>
    );
}

export default Slideshow;