import { IconType } from 'react-icons';
import {
    MdOutlineSouthWest,
    MdOutlineWest,
    MdOutlineNorthWest,
    MdOutlineSouth,
    MdOutlineSouthEast,
    MdOutlineNorth,
    MdOutlineNorthEast,
    MdOutlineEast,
} from "react-icons/md";


export const windDirection = (angle: number): IconType => {
    const directions = [
        MdOutlineSouth,
        MdOutlineSouthWest,
        MdOutlineWest,
        MdOutlineNorthWest,
        MdOutlineNorth,
        MdOutlineNorthEast,
        MdOutlineEast,
        MdOutlineSouthEast,
    ];
    return directions[Math.round(angle / 45) % 8];
};