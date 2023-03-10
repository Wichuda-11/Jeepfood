import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import RestaurantHeader from '../components/RestaurantHeader';
import {restaurantsData,menu} from '../global/Data';
import {colors, fonts} from '../global/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from './RestuarantTabs/Menu';

import {TabView, TabBar} from 'react-native-tab-view';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const RestaurantHome = ({navigation, route}) => {

  const {id, restaurant} = route.params;
  const [routes] = useState([
    {key: 'first', title: 'MENU'},
    {key: 'second', title: 'INFO'},
    {key: 'third', title: 'REVIEWS'},
    {key: 'fourth', title: 'GALLERY'},
  ]);

  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.Cardbackground}}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  

  const UpdateRoute1 = () => {
    return <View></View>;
  };

  const menuPressed = () => {
    //setModalVisible(true);
    navigation.navigate('MenuProduct');
  };

  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />
          {restaurantsData[id].discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL
              </Text>
            </View>
          )}
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>
                {restaurantsData[id].restaurantsName}
              </Text>
              <Text style={styles.text3}>{restaurantsData[id].foodType}</Text>
              <View style={styles.view4}>
                <FontAwesome name="star" color={colors.grey3} size={15} />
                <Text style={styles.text4}>
                  {restaurantsData[id].averageReview}
                </Text>
                <Text style={styles.text5}>
                  ({restaurantsData[id].numberOfReview})
                </Text>
                <FontAwesome name="map-marker" color={colors.grey3} size={15} />
                <Text style={styles.text6}>
                  {restaurantsData[id].farAway} mi away
                </Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Text style={styles.text6h}>Collect</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>
                  {restaurantsData[id].collectTime}
                </Text>
                <Text style={styles.text8}>min</Text>
              </View>
            </View>
            <View style={styles.view8}>
              <Text style={styles.text6h}>Delivery</Text>
              <View style={styles.view9}>
                <Text style={styles.text9}>
                  {restaurantsData[id].deliveryTime}
                </Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view10}>
          <TabView
            navigationState={{index, routes}}
            renderScene={UpdateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        {index === 0 && <Menu onPress={menuPressed} />}
      </ScrollView>

      <TouchableOpacity>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>View Cart</Text>
            <View style={styles.view13}>
              <Text style={styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default RestaurantHome

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 20},

  view1: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {color: 'green', fontSize: 16, fontWeight: 'bold'},

  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  text2: {fontSize: 20, fontWeight: 'bold', color: colors.grey1},

  view3: {flex: 8},

  text3: {fontSize: 18, color: colors.grey3},

  view4: {flexDirection: 'row', alignItems: 'center', marginTop: 5},

  text4: {
    fontFamily: fonts.android.bold,
    fontSize: 15,
    color: colors.grey3,
    marginLeft: 5,
  },

  text5: {
    fontFamily: fonts.android.bold,
    fontSize: 15,
    color: colors.grey3,
    marginLeft: 5,
    marginRight: 5,
  },

  view5: {flex: 3, alignItems: 'center'},

  text6: {
    fontFamily: fonts.android.bold,
    fontSize: 15,
    color: colors.grey3,
    marginLeft: 5,
  },

  text6h: {fontSize: 15, fontWeight: 'bold', color: colors.grey1},

  view7: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text7: {fontSize: 16, fontWeight: 'bold', color: colors.black, marginTop: 5},

  text8: {fontSize: 13, color: colors.black, marginBottom: 5},

  view8: {flex: 3, alignItems: 'center'},

  text9: {fontSize: 15, fontWeight: 'bold', color: colors.Cardbackground},

  view9: {
    width: 40,
    height: 40,
    backgroundColor: colors.buttons,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text10: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.Cardbackground,
    marginTop: 5,
  },

  text11: {
    fontSize: 13,
    color: colors.Cardbackground,
    marginBottom: 5,
  },

  view10: {elevation: 10, backgroundColor: colors.pagebackground},

  view11: {
    backgroundColor: colors.buttons,
    height: 50,
    alignContent: 'center',
    marginBottom: 0,
    justifyContent: 'center',
    paddingLeft: 5,
  },

  view12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text12: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.Cardbackground,
  },

  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: colors.Cardbackground,
    borderRadius: 6,
    paddingBottom: 2,
  },

  text13: {
    paddingHorizontal: 3,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.Cardbackground,
  },

  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {fontWeight: 'bold', color: colors.Cardbackground},

  tabStyle: {width: SCREEN_WIDTH / 4, maxHeight: 45},

  view14: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text14: {
    fontWeight: 'bold',
    marginLeft: 40,
    color: colors.black,
    fontSize: 18,
  },

  view15: {marginTop: 5, paddingBottom: 20},
});
