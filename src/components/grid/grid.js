import SectionTag from "../sectionTag/sectionTag";
import classes from "./grid.module.css";
import keuneCareImg from "../../img/01_care.jpg";
import keuneDesignImg from "../../img/02_design.jpg";
import keuneBlendImg from "../../img/03_blend_1.jpg";
import keuneColorImg from "../../img/04_koloryzacja.jpg";
import keunePureImg from "../../img/05_so_pure.jpg";

const Grid = () => {
    return (
        <div className={classes.grid}>
            <div>
                <SectionTag>o2.</SectionTag>
                <span>Marki<br />Keune</span>
            </div>
            <div className={classes["col-2"]}>
                <img src={keuneCareImg} />
                <div>
                    <p>Keune<br />care<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </div>
            <div className={classes["col-1"]}>
                <img src={keuneDesignImg} />
                <div>
                    <p>Keune<br />design<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </div>
            <div className={classes["col-2"]}>
                <img src={keuneBlendImg} />
                <div>
                    <p>Keune<br />blend<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </div>
            <div className={classes["col-2"]}>
                <img src={keuneColorImg} />
                <div>
                    <p>Keune<br />koloryzacja<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </div>
            <div className={classes["col-1"]}>
                <img src={keunePureImg} />
                <div>
                    <p>Keune<br />so pure<a>odkryj serie <span>&#10095;</span></a></p>
                </div>
            </div>
        </div>
    );
}

export default Grid;