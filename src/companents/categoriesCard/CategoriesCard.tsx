import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.style';

interface Category {
  category: {
    strCategory: string;
    idCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  };
  onSelect: () => void;
}

const CategoriesCard = ({category,onSelect}: Category) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.card}>
        <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
        <Text style={styles.title}>{category.strCategory}</Text>
        <Text style={styles.description}>
          {category.strCategoryDescription}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
