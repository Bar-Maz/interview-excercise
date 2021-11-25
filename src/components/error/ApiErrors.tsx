import React from "react";
import {NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ApiErrorProps {
    error: Error | null,
    title?: string,
    retryFunction?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void
}

// component for displaying errors with custom title and error message in the body.

export const ApiError = ({error, title = "Error", retryFunction}: ApiErrorProps) => {

    if (!error) {
        return null;
    }

    // render passed/default title and the error message, if there's no message render only the centered title
    // if the retry function is passed, render the render button

    return (
        <View style={styles.itemContainer}>
            <View style={[styles.titleContainer, !error.message ? styles.noMessage : null]}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            {error.message && <View style={styles.bodyContainer}>
                <Text style={styles.body}>
                    {error.message}
                </Text>
            </View>}
            {retryFunction && <TouchableOpacity onPress={retryFunction} style={styles.button}>
                <Text style={styles.buttonText}>
                    RETRY
                </Text>
            </TouchableOpacity>}
        </View>
    )

}

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 10,
        marginVertical: 6,
        marginHorizontal: 12
    },
    titleContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#AA0000",
    },
    title: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 22,
    },
    noMessage: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
    },
    bodyContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#CC4444"
    },
    body: {
        fontSize: 16,
        color: 'white',
        fontWeight: "500",
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