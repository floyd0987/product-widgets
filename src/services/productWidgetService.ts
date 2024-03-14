import { useQuery } from 'react-query';

const API_URL = 'https://api.mocki.io/v2/016d11e8/v2/product-widgets';

export const fetchProductWidgets = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch product widgets');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching product widgets:', error);
        throw error;
    }
};

export const useProductWidgets = () => {
    return useQuery('productWidgets', fetchProductWidgets);
};
