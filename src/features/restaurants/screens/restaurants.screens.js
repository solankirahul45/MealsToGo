import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { FlatList } from "react-native";

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>    

        <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />     
      </SafeArea>
);