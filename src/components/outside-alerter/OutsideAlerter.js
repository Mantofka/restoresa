import React, {useEffect, useRef} from 'react'

function useOutsideAlerter(ref, cb) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            cb();
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
}

export default function OutsideAlerter({children, callback}) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, callback);
  
    return <div ref={wrapperRef}>{children}</div>;
  }