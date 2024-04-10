import { format } from 'date-fns';

export const formatTimestampToTime = (timestamp: number):string => {
    const date = new Date(timestamp * 1000);
    return format(date, 'HH:mm');
}