import isEqual from './IsEqual';

// calls api to get random dog images given limit
export default function fetchDogs(
    limit,
    breed,
    subBreed,
    list,
    setList,
    setLoading,
    setIsMax
) {
    setLoading(true);
    // based on whether breed and/or subbreed is selected
    // api will call different endpoint and fetch accordingly
    fetch(
        `https://dog.ceo/api/breed${breed ? '' : 's'}/${
            breed ? `${breed}/` : ''
        }${subBreed ? `${subBreed}/` : ''}image${
            breed ? 's' : ''
        }/random/${limit}`,
        {
            method: 'GET',
        }
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // 750ms timeout to prevent too many requests
            setTimeout(() => {
                // if new initial call, then replace list
                if (limit > 10) {
                    setList([...new Set(data.message)]);
                }
                // else concat list for infinite scrolling
                else {
                    const _list = [...list].concat(data.message);
                    // no new images on load, set is max to true
                    if (isEqual(_list, list)) {
                        setIsMax(true);
                    }
                    // concat to original list after removing duplicates
                    else {
                        setList([...new Set(_list)]);
                        setIsMax(false);
                    }
                }
            }, 750);
        });
}
