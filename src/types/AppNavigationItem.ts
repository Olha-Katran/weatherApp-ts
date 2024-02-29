import React from "react";
import { IconType } from 'react-icons/lib';
import { NavigationItem } from './NavigationItem';

export interface AppNavigationItem extends NavigationItem {
    Icon: React.ComponentType<{ active?: boolean }> | IconType;
    desktopOnly?: boolean;
    mobileOnly?: boolean;
    display?: boolean;
}
