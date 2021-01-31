// calls api to get list of breeds and subbreeds
export default function populateBreeds(setAllBreeds, setLoading) {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/list/all', {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => {
            setAllBreeds(data.message);
        });
}
