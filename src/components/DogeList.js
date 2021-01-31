import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';

const DogeList = ({ list, setLoading }) => {
    useEffect(() => {
        setLoading(false);
    }, [list, setLoading]);

    return (
        // Display doge images
        list.length > 0 && (
            <Container id="dog-list">
                {list.map((dog, idx) => (
                    <Card.Header
                        key={idx}
                        bg="light"
                        border="light"
                        className="dog-item mb-3 mx-2 p-3"
                    >
                        <Card.Img
                            variant="top"
                            src={dog}
                            rounded
                            height="260px"
                        />
                    </Card.Header>
                ))}
            </Container>
        )
    );
};

export default DogeList;
