import React, { useState, useEffect, forwardRef, Children } from 'react';
import { Row, Dropdown, FormControl } from 'react-bootstrap';
import capitalizeFirst from '../services/CapitalizeFirst';

const DogeMenu = forwardRef(
    ({ children, style, className, id, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                id={id}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {Children.toArray(children).filter((child) => {
                        const breed = child.props.children;
                        return (
                            !value ||
                            child.props.children
                                .toLowerCase()
                                .startsWith(value.toLowerCase())
                        );
                    })}
                </ul>
            </div>
        );
    }
);

const DogeFilter = ({
    list,
    setLoading,
    setBreed,
    setSubBreed,
    activeBreed,
    activeSubBreed,
}) => {
    useEffect(() => {
        setLoading(false);
    }, [list, setLoading]);

    const handleBreed = (e) => {
        setSubBreed('');
        setBreed(e);
    };

    const handleSubBreed = (e) => {
        setSubBreed(e);
    };

    return (
        <Row>
            {/* Filter by breed */}
            <Dropdown className="doge-filter mx-2" onSelect={handleBreed}>
                <Dropdown.Toggle variant="light" id="doge-filter-toggle">
                    Filter by Breed{' '}
                </Dropdown.Toggle>

                <Dropdown.Menu as={DogeMenu} className="doge-filter-menu">
                    {/* All random doge selection */}
                    <Dropdown.Item
                        eventKey={''}
                        active={'' === activeBreed}
                        className="text-muted"
                    >
                        No specific breed
                    </Dropdown.Item>
                    {/* Filter by breeds */}
                    {Object.keys(list).map((breed) => {
                        return (
                            <Dropdown.Item
                                eventKey={breed}
                                active={breed === activeBreed}
                            >
                                {capitalizeFirst(breed)}
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            {/* Filter by sub-breed */}
            {list[activeBreed] && list[activeBreed].length > 0 && (
                <Dropdown className="doge-filter" onSelect={handleSubBreed}>
                    <Dropdown.Toggle variant="light" id="doge-filter-toggle">
                        Filter by Sub-Breed{' '}
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={DogeMenu} className="doge-filter-menu">
                        {/* Random sub-breed selection */}
                        <Dropdown.Item
                            eventKey={''}
                            active={'' === activeSubBreed}
                            className="text-muted"
                        >
                            No specific sub-breed
                        </Dropdown.Item>
                        {/* Filter by sub-breeds */}
                        {list[activeBreed].map((subBreed) => {
                            return (
                                <Dropdown.Item
                                    eventKey={subBreed}
                                    active={subBreed === activeSubBreed}
                                >
                                    {capitalizeFirst(subBreed)}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            )}
        </Row>
    );
};

export default DogeFilter;
