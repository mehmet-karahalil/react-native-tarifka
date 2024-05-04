import React from "react";
import {TextInput} from 'react-native';
import styles from './Search.style';

interface Search {
    onChange: (text: string) => void;
}

const Search = ({onChange}:Search) => {
    return (
        <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Search..."
        />
    );
    };

export default Search;