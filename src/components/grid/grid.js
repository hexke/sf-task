import SectionTag from "../sectionTag/sectionTag";
import classes from "./grid.module.css";
import keuneCareImg from "../../img/01_care.jpg";
import keuneDesignImg from "../../img/02_design.jpg";
import keuneBlendImg from "../../img/03_blend_1.jpg";
import keuneColorImg from "../../img/04_koloryzacja.jpg";
import keunePureImg from "../../img/05_so_pure.jpg";
import Observer from "../intersectionObserver/intersectionObserver";
import { useCallback, useMemo } from "react";

const Grid = () => {
    const observerOptions = useMemo(() => ({
        threshold: [0.7, 0.8, 0.9, 1]
    }), []);

    const observerCallback = useCallback((entries) => {
        if (entries[0].intersectionRatio > 0.9) {
            entries[0].target.classList.add(`${classes.mobileHover}`);
        } else if (entries[0].intersectionRatio < 0.8) {
            entries[0].target.classList.remove(`${classes.mobileHover}`);
        }
    }, []);

    return (
        <div className={classes.grid}>
            <div>
                <SectionTag>o2.</SectionTag>
                <span>Marki <br />Keune</span>
            </div>
            <Observer callback={observerCallback} options={observerOptions} className={classes["col-2"]}>
                <img src={keuneCareImg} />
                <div>
                    <p>Keune<br />care<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </Observer>
            <Observer callback={observerCallback} options={observerOptions} className={classes["col-1"]}>
                <img src={keuneDesignImg} />
                <div>
                    <p>Keune<br />design<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </Observer>
            <Observer callback={observerCallback} options={observerOptions} className={classes["col-2"]}>
                <img src={keuneBlendImg} />
                <div>
                    <p>Keune<br />blend<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </Observer>
            <Observer callback={observerCallback} options={observerOptions} className={classes["col-2"]}>
                <img src={keuneColorImg} />
                <div>
                    <p>Keune<br />koloryzacja<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </Observer>
            <Observer callback={observerCallback} options={observerOptions} className={classes["col-1"]}>
                <img src={keunePureImg} />
                <div>
                    <p>Keune<br />so pure<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </Observer>
        </div>
    );
}

export default Grid;