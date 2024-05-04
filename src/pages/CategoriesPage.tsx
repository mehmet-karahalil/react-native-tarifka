import React, { useEffect } from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import useFetch from '../hooks/useFetch';
import Loading from '../companents/loading';
import Error from '../companents/error';
import CategoriesCard from '../companents/categoriesCard';
import Search from '../companents/search';

interface Category {
  strCategory: string;
  idCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface CategoriesResponse {
  categories: Category[];
}

interface CategoriesPageProps {
  navigation: any;
}

const CategoriesPage = ({navigation}: CategoriesPageProps) => {
  const {data, loading, error, refreshing, fetchData} =
    useFetch<CategoriesResponse>(
      `https://www.themealdb.com/api/json/v1/1/categories.php`,
    );

  const [items, setItems] = React.useState<Category[] | undefined>();

  useEffect(() => {
    setItems(data?.categories);
  }, [data]);

  const handleCategory = (category: string) => {
    navigation.navigate('second', {category: category});
  };

  const renderItem = ({item}: {item: Category}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleCategory(item.strCategory)}
    />
  );

  const handleSearch = (text: string) => {
    const filteredItems = data?.categories.filter((item) => {
      return item.strCategory.toLowerCase().includes(text.toLowerCase());
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
        keyExtractor={item => item.idCategory}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }
      />
    </View>
  );
};

export default CategoriesPage;
