import { WINDOW_RESIZED, OPEN_ORDER_MODAL } from "./ui.types";

export const resizeScreen = (width) => {
    return {
        type: WINDOW_RESIZED,
        payload: defineScreen(width)
    }
}

export const defineScreen = (width) => {
    if(width > 992) return 'lg';
    else if(width > 600) return 'md';
    else if(width > 480) return 'sm';
    else return 'xs'
}

export const openOrderModal = (state) => {
    return {
        type: OPEN_ORDER_MODAL,
        payload: state,
    }
}



