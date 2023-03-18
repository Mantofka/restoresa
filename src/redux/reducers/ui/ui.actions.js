import { WINDOW_RESIZED } from "./ui.types";

export const resizeScreen = (width) => {
    return {
        type: WINDOW_RESIZED,
        payload: defineScreen(width)
    }
}

export const defineScreen = (width) => {
    if(width > 992) return 'lg';
    else if(width > 480) return 'md';
    else return 'sm'
}



