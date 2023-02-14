import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Dimensions } from 'react-native/Libraries/Utilities/Dimensions';
import { ProfileDummy, FoodDummy1, FoodDummy2 } from '../../assets'
import { FoodCard, Gap, HomeTabSection } from '../../components'


const Home = ({ navigation }) => {

  
    return (
        <View style={styles.homeContainer}>    
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.appName}>FoodMarket</Text>
                    <Text style={styles.desc}>Let's get some foods</Text>
                </View>
                <Image source={ProfileDummy} style={styles.profile} />
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer}>
                        <Gap width={12}/>
                        <FoodCard title="Cherry Healthy" rating={4.5} picture={FoodDummy1}/>
                        <FoodCard title="Burger Tamayo" rating={4.5} picture={FoodDummy2}/>
                        <Gap width={12}/>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.tabContainer}>
                <HomeTabSection />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "#F9F9FB",
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
    },
    appName: {
        fontSize: 22,
        fontFamily: 'Poppins',
        color: "#020202"
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginVertical: 12,
    },
    tabContainer: {
        flex: 1,
    }
})