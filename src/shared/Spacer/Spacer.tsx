import React from 'react';
import { Units } from './Spacer.types';

interface Props {
    size: number;
    unit?: Units;
    isHorizontal?: boolean;
    backgroundColor?: string;
}

type SpaceProps = {
    size: number;
    unit: Units;
    backgroundColor: string;
};

const px = (value: number) => `${value}px`;

const pxToUnit = (unit: Units, value: number) => {
    const mapper = {
        [Units.px]: px,
    };
    return mapper[unit](value);
};

const HorizontalSpace = ({size, unit, backgroundColor}: SpaceProps) => (
    <div
        style={{width: pxToUnit(unit, size), flex: `0 0 ${pxToUnit(unit, size)}`, backgroundColor: backgroundColor}}
    />
);

const VerticalSpace = ({size, unit, backgroundColor}: SpaceProps) => (
    <div
        style={{ paddingTop: pxToUnit(unit, size), maxWidth: '90vw', backgroundColor: backgroundColor}}
    />
);

const Spacer: React.FC<Props> = ({
    size,
    isHorizontal = false,
    unit = Units.px,
    backgroundColor = '#ffffff'
}) => {
    const Space = isHorizontal ? HorizontalSpace : VerticalSpace;
    return <Space size={size} unit={unit} backgroundColor={backgroundColor} />
};

export default Spacer