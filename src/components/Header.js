import React from 'react';
import capitalizeFirst from '../services/CapitalizeFirst';

export default function Header({ breed, subBreed }) {
    return (
        <h2 id="header">
            View the cutest {breed ? '' : 'Doge'}
            {capitalizeFirst(subBreed)}
            {subBreed && ' '}
            {capitalizeFirst(breed)}s! :)
        </h2>
    );
}
