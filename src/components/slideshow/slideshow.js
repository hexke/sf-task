import classes from './slideshow.module.css';
import slideOne from '../../img/slide1-big.jpg';
import slideTwo from '../../img/slide2-big.jpg';
import { useContext, useEffect } from 'react';
import Slide from './slide';
import { themeContext } from '../store/theme-store';

const Slideshow = () => {
    const { darkTheme, toggleDarkTheme } = useContext(themeContext);

    useEffect(() => {
        let nav;
        let slides;
        let currentSlide = 0;
        const arrowPrevSlide = document.getElementById("prevSlide");
        const arrowNextSlide = document.getElementById("nextSlide");

        const changeSlide = (index) => {
            if (currentSlide === index) return;
            slides[currentSlide].classList.remove(`${classes.active}`);
            setTimeout(() => {
                slides[currentSlide].style.zIndex = -1;
                slides[index].style.zIndex = 1;
                setTimeout(() => {
                    slides[index].classList.add(`${classes.active}`);
                    toggleDarkTheme(currentSlide % 2 !== 0);
                }, 0);
            }, 100);
            currentSlide = index;
        }

        const NextSlide = () => {
            if (currentSlide === slides.length - 1) {
                changeSlide(0);
            } else {
                changeSlide(currentSlide + 1);
            }
        }

        const PrevSlide = () => {
            if (currentSlide === 0) {
                changeSlide(slides.length - 1);
            } else {
                changeSlide(currentSlide - 1);
            }
        }

        const initNav = () => {
            nav = document.querySelector('.slideNav div:last-child');
            slides = [...document.querySelectorAll('.slide')];

            [...document.querySelectorAll('.slide')].forEach((slide, index) => {
                let span = document.createElement('span');
                span.id = `slide-${index}`;
                nav.appendChild(span);
                span.addEventListener("click", () => { changeSlide(index) });
            });
        };

        const keydownHandler = (e) => {
            if (e.key === "ArrowRight") {
                NextSlide();
            }

            if (e.key === "ArrowLeft") {
                PrevSlide();
            }
        }

        initNav();
        document.addEventListener("keydown", keydownHandler);
        arrowPrevSlide.addEventListener("click", PrevSlide);
        arrowNextSlide.addEventListener("click", NextSlide);
        
        return () => {
            nav.innerHTML = '';
            document.removeEventListener("keydown", keydownHandler);
            arrowPrevSlide.removeEventListener("click", PrevSlide);
            arrowNextSlide.removeEventListener("click", NextSlide);
        }
    }, []);

    return (
        <div className={`${classes.slideshow} ${darkTheme ? classes["dark-theme"] : ""}`}>
            <Slide className={`slide ${classes.slide} ${classes.active}`} imageSrc={slideOne} imageAlt="">
                <p className={classes.text}>Bez kompromisu<br />Idealnie takie jak lubisz.
                </p>
                <p>Keune <span>design</span></p>
                <a href="#"><span>&#10095;</span></a>
            </Slide>
            <Slide className={`slide ${classes.slide}`} imageSrc={slideTwo} imageAlt="">
                <p className={classes.text}>Bez kompromisu<br />Idealnie takie jak lubisz.
                </p>
                <p>Keune <span>care</span></p>
                <a href="#"><span>&#10095;</span></a>
            </Slide>
            <div className={`slideNav ${classes.slideNav}`}>
                <div className={classes.arrows}>
                    <span id="prevSlide">&#10094;</span>
                    <span id="nextSlide">&#10095;</span>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Slideshow;