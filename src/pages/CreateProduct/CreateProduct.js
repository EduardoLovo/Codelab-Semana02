import React from "react";
import { Api } from "../../Api/Api";

export default function CreateProduct() {
    const handleSubmit = async event => {
        // Previne o comportamento padrão do submit, que no caso do form é o refresh
        event.preventDefault();

        // Obtém os dados dos inputs
        const name = event.target.name.value;
        const price = +event.target.price.value;
        const imageUrl = event.target.imageUrl.value;

        // Constrói um payload com esses dados
        const payload = {
            name,
            price,
            images: [
                {
                    url: imageUrl,
                },
            ],
        };

        // Faz uma requisição no backend
        const response = await Api.buildApiPostRequest(
            Api.createProductUrl(),
            payload
        );

        console.log({ response });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <br />

                <input type="text" id="name" name="name" />
                <br />

                <label htmlFor="price">Price:</label>
                <br />

                <input type="number" id="price" name="price" />
                <br />

                <label htmlFor="imageUrl">Image URL:</label>
                <br />

                <input type="text" id="imageUrl" name="imageUrl" />
                <br />

                <input type="submit" value="Add" />
            </form>
        </div>
    );
}
