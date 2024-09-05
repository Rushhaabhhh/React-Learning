import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/be6f72d306ad890abdcec25a/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.conversion_rates) {
                    setData(res.conversion_rates);
                } else {
                    setData({});
                }
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
