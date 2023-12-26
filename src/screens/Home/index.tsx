import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import {styles} from './styles'

import { Participant } from './components/Participant';

export default function Home(){

    const [participants, setparticipants] = useState<string[]>([]);
    const [participantName, setparticipantName] = useState("");


    function handleParticipantAdd(){
        if(participants.includes(participantName)){
          return Alert.alert("Participante existe" , "Já existe um participante com esse nome")  
        }
        
        setparticipants(prevState => [...prevState, participantName]);
        setparticipantName('');
    }

    function handleParticipantRemove( name: string){
    
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setparticipants(prevState => prevState.filter(participants => participants !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log(`Remover participante ${name}`)
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
                    onChangeText={setparticipantName}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.text}> + </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant 
                        key={item}
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() =>(
                    <Text style={styles.empty}>Nenhum participante cadastrado</Text>
                )}
            />
        </View>
    );
};

