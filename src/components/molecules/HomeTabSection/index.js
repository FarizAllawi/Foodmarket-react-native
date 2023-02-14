import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { StyleSheet, ScrollView, View, Text, Image, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Rating } from '../../atoms';

const dummyData = {
    'newTaste' : [
        {
            picture: "https://via.placeholder.com/600/b0f7cc" ,
            title: 'Soup Bumil',
            price: 289000,
            rating:  4.1,
        },
        {
            picture: "https://via.placeholder.com/600/54176f" ,
            title: 'Chicken',
            price: 289000,
            rating:  4.7,
        },
        {
            picture: "https://via.placeholder.com/600/51aa97" ,
            title: 'Shrimp',
            price: 289000,
            rating:  4.7,
        },
        {
            picture: "https://via.placeholder.com/600/54176f" ,
            title: 'Burger Tamayo',
            price: 289000,
            rating:  4.7,
        },
        {
            picture: "https://via.placeholder.com/600/51aa97" ,
            title: 'Avosalado',
            price: 18000,
            rating:  4.6,
        },
    ],
    'popular' : [
        {
            picture: "https://via.placeholder.com/600/b0f7cc" ,
            title: 'Chery Healthy',
            price: 18390,
            rating:  4.5,
        },
        {
            picture: "https://via.placeholder.com/600/54176f" ,
            title: 'Burger Tamayo',
            price: 289000,
            rating:  4.7,
        },
        {
            picture: "https://via.placeholder.com/600/51aa97" ,
            title: 'Avosalado',
            price: 18000,
            rating:  4.6,
        },
    ],
    'recommended': [
        {
            picture: "https://via.placeholder.com/600/b0f7cc" ,
            title: 'Soup Bumil',
            price: 289000,
            rating:  4.1,
        },
        {
            picture: "https://via.placeholder.com/600/54176f" ,
            title: 'Chery Healthy',
            price: 18390,
            rating:  4.5,
        },
        {
            picture: "https://via.placeholder.com/600/51aa97" ,
            title: 'Shrimp',
            price: 289000,
            rating:  4.7,
        },
    ]

}

const TabContent = ({ route }) => {
    const [data, setData] = useState(dummyData[route])

    useEffect(() => {
        setData(dummyData[route])
    })

   
    return (

        <ScrollView vertical showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {
                    data?.map((data, index) => {
                        return (
                            <View key={index} style={styles.content}>
                                <Image  source={{
                                            uri: data.picture,
                                            method:"GET",
                                            headers: {
                                                Pragma: 'no-cache',
                                            },
                                        }} 
                                        style={styles.TabContentImage} />
                    
                                <View style={styles.contentDescription}>  
                                    <View>
                                        <Text style={styles.title}>{data.title}</Text>
                                        <Text style={styles.price}>IDR {data.price}</Text>
                                    </View>
                                </View>
                                <Rating rating={data.rating} />
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
};


const renderScene = ({ route }) => {
    switch (route.key) {
      case 'newTaste':
        return <TabContent route={route.key} />
      case 'popular':
        return <TabContent route={route.key} />
      case 'recommended':
        return <TabContent route={route.key} />
      default:
        return null;
    }
  };

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
        backgroundColor: '#FFC700',
        width: 0.5,
        marginLeft: 24,
        padding: 0,
        height: 3,
      }}
      pressColor='white'
      tabStyle={{ width: 'auto'}}
      style={{ backgroundColor: 'white', paddingHorizontal: 24 , shadowColor: "#8D92A3",  shadowOffset: { width: 0, height:3}}}
      renderLabel={({ route, focused, color }) => (
            <Text style={{
                fontFamily: 'Poppins-Medium',
                color: focused ? '#020202' : '#8D92A3',
            }}>
                {route.title}
            </Text>
      )}
    />
);

const HomeTabSection = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'newTaste', title: 'New Taste' },
        { key: 'popular', title: 'Popular' },
        { key: 'recommended', title: 'Recommended' },

    ]);

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width  }}
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: "#020202"
    },
    price: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#8D92A3"
    },
    content: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center'
    },
    contentDescription: {
        flexDirection: 'row',
        flex:1
    },
    TabContentImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12
    }
})
