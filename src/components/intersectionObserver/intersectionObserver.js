import { useEffect, useRef } from "react";

const Observer = ({ options, callback, children, ...rest }) => {
    const observerRef = useRef();

    useEffect(() => {
        if (!window.matchMedia("(max-width:900px)").matches) return;

        const observer = new IntersectionObserver(callback, options);

        observer.observe(observerRef.current);

        return () => {
            observer?.disconnect();
        }
    }, [callback, options]);


    return (
        <div ref={observerRef} {...rest}>
            {children}
        </div>
    );
}

export default Observer;