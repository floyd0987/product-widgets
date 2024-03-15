import { useQuery } from 'react-query';

const API_URL = 'https://api.mocki.io/v2/016d11e8/v2/product-widgets';

type ErrorType = {
    message: string;
};

export type ProductWidget = {
    id: number;
    type: string;
    amount: number;
    action: string;
    active: boolean;
    linked: boolean;
    selectedColor: string;
};

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

export const useProductWidgets = ():{data:ProductWidget[] | undefined, isLoading:boolean, error:ErrorType | null} => {
    return useQuery('productWidgets', fetchProductWidgets);
};
