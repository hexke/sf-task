import classes from './slideshow.module.css';
import slideOne from '../../img/slide1-big.jpg';
import slideTwo from '../../img/slide2-big.jpg';
import { useEffect } from 'react';
import Slide from './slide';

const Slideshow = () => {

    useEffect(() => {
        let nav;
        let slides;

        const initNav = () => {
            nav = document.querySelector('.slideNav');
            slides = [...document.querySelectorAll('.slide')];
            let prevSlide = 0;

            [...document.querySelectorAll('.slide')].forEach((slide, index) => {
                let span = document.createElement('span');
                span.id = `slide-${index}`;
                nav.appendChild(span);

                span.addEventListener("click", function () {
                    if (prevSlide === index) return;
                    slides[prevSlide].classList.remove(`${classes.active}`);
                    setTimeout(() => {
                        slides[prevSlide].style.zIndex = -1;
                        slides[index].style.zIndex = 1;
                        setTimeout(() => {
                            slides[index].classList.add(`${classes.active}`);
                        }, 0);
                    }, 100);
                    prevSlide = index;
                });
            });
        };

        initNav();

        return () => {
            nav.innerHTML = '';
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