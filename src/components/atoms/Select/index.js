import React, { useState } from 'react'
import propTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function Select (props) {

    const { label, placeholder } = props
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.select}>
                <Picker
                    // selectedValue={selectedLanguage}
                    placeholder={placeholder}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#020202"
    },

    select: { 
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8, 
        padding: 0,
    }
})

Select.propTypes = {
    label : propTypes.string,
    placeholder: propTypes.string
}