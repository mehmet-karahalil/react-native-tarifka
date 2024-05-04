import React from "react";
import styles from "./Card.style";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

interface props {
    meals: {
        strMeal: string;
        strMealThumb: string;
        
    };
    onSelect: () => void;
  }


const Card = ({ meals,onSelect }:props) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.card}>
                <Text style={styles.cardText}>{meals.strMeal}</Text>
                <Image source={{uri: meals.strMealThumb}} style={styles.cardImage} />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Card;