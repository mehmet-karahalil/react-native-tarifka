import React from 'react';
import {ScrollView, Image, Text, View, Button, Linking} from 'react-native';
import styles from './CardDetail.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../loading';
import Error from '../error';

interface Props {
  route: any;
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
  [key: string]: any; // for dynamically accessed properties like ingredients
}

interface MealResponse {
  meals: Meal[];
}

const CardDetail = ({route}: Props) => {
  const item = route.params.item;

  const {data, loading, error, fetchData} = useFetch<MealResponse>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`,
  );

  const meal = data?.meals[0];

  if (!meal) {
    return <Loading />;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] && meal[`strMeasure${i}`]) {
      ingredients.push(
        `${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`,
      );
    }
  }

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <View>
        <Error onPress={fetchData} errorMessage={'hata'} />
      </View>
    );
  }
  return (
   
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
        <Text style={styles.subTitle}>Description</Text>
        <Text style={styles.description}>{meal.strInstructions}</Text>
        {ingredients.length > 0 && (
          <View>
            <Text style={styles.subTitle}>Ingredients</Text>
            {ingredients.map((ingredient, index) => (
              <Text key={index} style={styles.ingredient}>
                {index + 1 + ')'} {ingredient}
              </Text>
            ))}
          </View>
        )}
        <Button
          title="Watch on YouTube"
          onPress={() => Linking.openURL(meal?.strYoutube)}
        />
      </ScrollView>

  );
};

export default CardDetail;
