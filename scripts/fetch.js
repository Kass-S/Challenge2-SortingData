
const FetchJson = async () => {
    const response = await fetch('../data/data.json');
    const data = await response.json();
    console.log(data.People);
    return data.People;
}

export {FetchJson}