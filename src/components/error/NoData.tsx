import React from "react";
import {NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ApiErrorProps {
    message?: string,
    retryFunction?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void
}

// component for displaying the message about a successful request with no data returned.

export const NoData = ({message = "No data", retryFunction}: ApiErrorProps) => {

    // render passed/default title
    // if the retry function is passed, render the render button

    return (
        <View style={styles.itemContainer}>
            <View style={styles.messageContainer}>
                <Text style={styles.title}>
                    {message}
                </Text>
            </View>
            {
                retryFunction && <TouchableOpacity onPress={retryFunction} style={styles.button}>
                    <Text style={styles.buttonText}>
                        RETRY
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 12,
        marginHorizontal: 12
    },
    messageContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#EEEEEE",
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    title: {
        fontSize: 22,
    },
    button: {
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        marginTop: 10,
        elevation: 3,
        backgroundColor: 'gray',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})