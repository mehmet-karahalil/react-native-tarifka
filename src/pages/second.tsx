import React, {useEffect, useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import useFetch from '../hooks/useFetch';
import Card from '../companents/card';
import Error from '../companents/error';
import Loading from '../companents/loading';
import Search from '../companents/search';

interface Props {
  navigation: any;
  route: any;
}
interface Item {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
interface MealsResponse {
  meals: Item[];
}

const SecondPage = ({navigation, route}: Props) => {
  const category = route.params.category;

  const {data, loading, error, refreshing, fetchData} = useFetch<MealsResponse>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const [items, setItems] = React.useState<Item[] | undefined>();

    useEffect(() => {
      setItems(data?.meals);
    }, [data]);


  const handleSelect = (item: Item) => {
    navigation.navigate('CardDetail', {item: item});
  };

  const renderItem = ({item}: {item: Item}) => (
    <Card
      meals={item}
      onSelect={() => {
        handleSelect(item);
      }}
    />
  );

  const handleSearch = (text: string) => {
    const filteredItems = data?.meals.filter((item) => {
      return item.strMeal.toLowerCase().includes(text.toLowerCase());
    });
    setItems(filteredItems);
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
    <View>
      <Search onChange={handleSearch} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal.toString()}
        contentContainerStyle={{paddingBottom: 25}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }
      />
    </View>
  );
};

export default SecondPage;
