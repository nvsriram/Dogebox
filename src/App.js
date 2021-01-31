import React, { Suspense, lazy } from 'react';
import Loader from './assets/Loader';
import { Container } from 'react-bootstrap';

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));

function App() {
    return (
        <Container
            fluid
            className="align-items-center"
            style={{ height: '100%', minHeight: '100vh' }}
        >
            <Suspense fallback={<Loader padding="25%" />}>
                <Navbar />
                <Home />
            </Suspense>
        </Container>
    );
}

export default App;
