export const Api = {
    baseUrl: "http://localhost:3000",

    readAllUrl: () => Api.baseUrl + "/product",

    createProductUrl: () => Api.baseUrl + "/product",

    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),

    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify(body),
        }),
};