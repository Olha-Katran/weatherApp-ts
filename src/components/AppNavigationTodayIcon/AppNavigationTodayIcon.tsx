import React from 'react';

type Props = {
    active?: boolean;
};

const AppNavigationTodayIcon:React.FC<Props> = ({ active= false }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width='34'
        height='22'
        viewBox="0 0 34 22"
    >
        <path
            id='TodayIcon'
            d="M7.58999 8.52249C7.58999 7.88804 7.99335 7.49101 8.65124 7.49101H10.6319V5.57523C10.6319 4.92273 11.0182 4.51304 11.6611 4.51304C12.2923 4.51304 12.6881 4.92273 12.6881 5.57523V7.49101H14.5462C15.2552 7.49101 15.682 7.88804 15.682 8.52249C15.682 9.17616 15.2552 9.58491 14.5462 9.58491H12.6881V11.4986C12.6881 12.1532 12.2923 12.5704 11.6611 12.5704C11.0182 12.5704 10.6319 12.1532 10.6319 11.4986V9.58491H8.65124C7.99335 9.58491 7.58999 9.17616 7.58999 8.52249ZM19.1559 10.2032C19.1559 9.21695 19.927 8.45968 20.8898 8.45968C21.8665 8.45968 22.6237 9.21695 22.6237 10.2032C22.6237 11.1757 21.8665 11.9329 20.8898 11.9329C19.927 11.9329 19.1559 11.1757 19.1559 10.2032ZM22.6446 6.68804C22.6446 5.70179 23.404 4.94453 24.3689 4.94453C25.353 4.94453 26.1007 5.70179 26.1007 6.68804C26.1007 7.66257 25.353 8.40812 24.3689 8.40812C23.404 8.40812 22.6446 7.66257 22.6446 6.68804ZM4.57664 21.6175C6.30866 21.6175 7.4946 20.9704 8.53803 19.7475L10.6212 17.316C10.9216 16.9717 11.231 16.8065 11.5931 16.8065H22.7072C23.0693 16.8065 23.3787 16.9717 23.6791 17.316L25.7644 19.7475C26.8078 20.9683 27.9916 21.6175 29.7237 21.6175C32.4389 21.6175 34.3003 19.8278 34.3003 16.9823C34.3003 15.7556 34.035 14.3636 33.5695 12.8224C32.8483 10.4053 31.5923 7.12726 30.3991 4.60445C29.3829 2.48031 28.8293 1.44133 26.2605 0.859843C24.0089 0.345391 20.9166 0.00976562 17.156 0.00976562C13.3934 0.00976562 10.2914 0.345391 8.03976 0.859843C5.47101 1.44133 4.91742 2.48031 3.90328 4.60445C2.71008 7.12726 1.45195 10.4053 0.73289 12.8224C0.267422 14.3636 0 15.7556 0 16.9823C0 19.8278 1.8614 21.6175 4.57664 21.6175Z"
        />
        <defs>
            <linearGradient id='GradientGame'>
                <stop offset='0%'/>
                <stop offset='100%'/>
            </linearGradient>
        </defs>
    </svg>
);

export default AppNavigationTodayIcon;