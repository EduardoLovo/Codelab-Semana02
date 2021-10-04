import React from 'react'
import { useState, useEffect} from 'react'
import { Api } from '../../Api/Api';

export const ProdutosList = () => {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const results = await response.json();
            
            setProdutos(results);
        };
        
        loadData();
    }, [])

    return (
        <div>
            {produtos.map((produtos, index) => (
                <div key={"produtos_" + index}>{produtos.name}</div>
            ))}
        </div>
    )
}
