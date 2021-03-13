// import { useEffect, useState } from "react"

// export const useOnScreen = (ref) => {

//     const [isIntersecting, setIntersecting] = useState(false);

//     const observer = new IntersectionObserver(
//         ([entry]) => setIntersecting(entry.isIntersecting)
//     )

//     useEffect(()=>{
//         observer.observe(ref.current)

//         return () => { observer.disconnect() }
//     },[]);

//     return isIntersecting;
    
// }

export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= window.innerHeight/2*3
    );
}

export const scrollToElement = (element) => {
    const rect = element.getBoundingClientRect();
    const absoluteElementTop = rect.top + window.pageYOffset;
    const middle = absoluteElementTop - ((window.innerHeight || document.documentElement.clientWidth) / 2);
    window.scrollTo({'left' : 0,'top': middle, 'behavior' : 'smooth'});
}

export const addScrollListener = (cb) => {
    document.addEventListener('scroll', cb);
}

export const removeScrollListener = (cb) => {
    document.removeEventListener('scroll', cb);
}
