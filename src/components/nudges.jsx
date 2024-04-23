import React from "react";

export const ControlType = ( {typeNumber} ) => {
    switch (typeNumber) {
        case 1:
            return 'no-nudge';
        case 2:
            return 'nudge';
        case 3:
            return 'visible-nudge';
        case 4:
            return 'understandable-nudge';
        default:
            return 'choice';
    }
}
