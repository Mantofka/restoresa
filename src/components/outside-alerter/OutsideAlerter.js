import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import { selectIsAlertModalOpen } from "../../redux/reducers/ui/ui.selectors";

function useOutsideAlerter(ref, cb) {
  const isAlertModalOpen = useSelector(selectIsAlertModalOpen);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        !isAlertModalOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        cb();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, isAlertModalOpen]);
}

export default function OutsideAlerter({ children, callback }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, callback);

  return <div ref={wrapperRef}>{children}</div>;
}
