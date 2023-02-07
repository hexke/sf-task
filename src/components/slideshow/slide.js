import SectionTag from "../sectionTag/sectionTag";

const Slide = ({ children, imageSrc, imageAlt, ...rest }) => {
    const alt = imageAlt ? imageAlt : "";

    return (
        <div {...rest}>
            <img src={imageSrc} alt={alt} />
            <div>
                <SectionTag>o1.</SectionTag>
                {children}
            </div>
        </div>
    );
}

export default Slide;