import classes from './sectiontag.module.css';

const SectionTag = ({ children, ...rest }) => {
    return (
        <p {...rest} className={classes.sectionTag}>
            {children}
        </p>
    );
}

export default SectionTag;