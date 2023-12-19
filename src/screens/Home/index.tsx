import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles'

export default function Home(){

    function handleParticipantAdd(){
        console.log('Adicionar participante')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Welcome to the Home Screen!</Text>
            <Text style={styles.eventDate}>Sexta, 04 de Novembro</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.imput}
                    placeholder='Nome do participante'
                    placeholderTextColor={"#FFF"}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.text}> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

