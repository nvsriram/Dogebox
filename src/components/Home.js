import React, { useState, useEffect, useMemo } from 'react';
import { Container, Toast } from 'react-bootstrap';
import Loader from '../assets/Loader';
import populateBreeds from '../services/PopulateBreeds';
import fetchDogs from '../services/FetchDogs';
import Header from './Header';
import DogeFilter from './DogeFilter';
import DogeList from './DogeList';
import ScrollToast from './ScrollToast';
import MaxToast from './MaxToast';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [isMax, setIsMax] = useState(false);
    const [navigateTop, setNavigateTop] = useState(true);
    const [list, setList] = useState([]);
    const [allBreeds, setAllBreeds] = useState([]);

    // by default, displays random breed - random subbreed
    const [breed, setBreed] = useState('');
    const [subBreed, setSubBreed] = useState('');

    // populates allBreeds when component loads
    useMemo(() => populateBreeds(setAllBreeds, setLoading), []);

    // when component loads and/or new (sub)breed is selected,
    // scrolls to top and fetches 12 images
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchDogs(12, breed, subBreed, list, setList, setLoading, setIsMax);
    }, [breed, subBreed]);

    // handles infinite scrolling
    const handleInfiniteScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        // if not loading and user has scrolled 50% of the last image
        // fetch more dog images
        if (!loading && winScroll + 130 > height) {
            fetchDogs(6, breed, subBreed, list, setList, setLoading, setIsMax);
        } else if (winScroll < 550) {
            setNavigateTop(false);
        } else {
            setNavigateTop(true);
        }
    };

    // set event listener for scroll and implement infinite scroll
    useEffect(() => {
        function handleScroll() {
            window.addEventListener('scroll', handleInfiniteScroll);
        }
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    });

    return (
        <Container id="home-container" fluid>
            <Header breed={breed} subBreed={subBreed} />
            <DogeFilter
                list={allBreeds}
                setLoading={setLoading}
                setBreed={setBreed}
                setSubBreed={setSubBreed}
                activeBreed={breed}
                activeSubBreed={subBreed}
            />
            <DogeList list={list} setLoading={setLoading} />
            {!isMax && loading && (
                <Loader padding={list.length <= 12 ? '25%' : '10px'} />
            )}
            {isMax && <MaxToast />}
            <ScrollToast navigateTop={navigateTop} />
        </Container>
    );
};

export default Home;
