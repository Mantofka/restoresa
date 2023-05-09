import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import { selectIsAlertModalOpen } from "../../redux/reducers/ui/ui.selectors";

function useOutsideAlerter(ref, cb) {
  const isAlertModalOpen = useSelector(selectIsAlertModalOpen);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !isAlertModalOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isAlertModalOpen]);
}

export default function OutsideAlerter({ children, callback }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, callback);

  return <div ref={wrapperRef}>{children}</div>;
}
