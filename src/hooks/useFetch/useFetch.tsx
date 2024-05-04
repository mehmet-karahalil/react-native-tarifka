import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = <T = any>(url: string) => {
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false)



    const fetchData = async () => {
        try {
            setRefreshing(true)
            const {data:responseData} = await axios.get(url)
            setData(responseData)
            setRefreshing(false)
            setLoading(false)

        } catch (err) {
            setError('hata oluştu')
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, []);
    
    return { data, loading, error,refreshing,fetchData};
    }

export default useFetch;