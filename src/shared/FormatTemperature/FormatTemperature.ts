export const formatTemperature = (temperature: number): string => {
    const sign = temperature > 0 ? '+' : '';
    return `${sign}${Math.round(temperature)}°`;
};