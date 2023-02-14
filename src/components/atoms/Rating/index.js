import React, { useState } from 'react'
import propTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { IconStarOn, IconStarOff } from '../../../assets'

export default function Rating({ rating }) {
    const maxRating = 5

    const starOn = Math.floor(rating)
    const starOff = maxRating - Math.floor(rating)

    return (
        <View style={styles.ratingContainer}>
            {/* Render Star On */}
            {
                [...Array(starOn).keys()].map((index) =>{
                    return <IconStarOn key={index} />
                })
            }
            {/* Render Star Off */}
            {
                [...Array(starOff).keys()].map((index) =>{
                    return <IconStarOff key={index} />
                })
            }
            <Text style={styles.ratingText}>{rating}</Text>    
        </View>
    )
}

const styles = StyleSheet.create({
    ratingContainer: {
        paddingVertical:6,
        flexDirection: 'row',
        
    },
    ratingText: {
        marginStart: 6,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#8D92A3"
    }
})
