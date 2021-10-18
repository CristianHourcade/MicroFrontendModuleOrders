import CardComponent from "../components/CardComponent";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovementController = () => {
    const array = Array(5).fill(true);
    return <>
        {array.map((item,index)=> {
            return <View key={index} style={{backgroundColor:'violet', padding:15}}>
                <CardComponent/>
            </View>
        })}
    </>
}

export default MovementController;