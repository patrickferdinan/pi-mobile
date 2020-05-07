import React from 'react';
import {Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Event() {
    const navigation = useNavigation();

    function navigationToDetail() {
        navigation.navigate('Detail');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 eventos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Participe dos melhores eventos no mundo.</Text>

            <FlatList 
                data={[1, 2, 3, 4]}
                style={styles.eventList}
                renderItem={() => (
                    <View style={styles.event}>
                        <Text style={styles.usuarioProperty}>Organizador:</Text>
                        <Text style={styles.usuarioValue}>Patrick</Text>

                        <Text style={styles.usuarioProperty}>Evento:</Text>
                        <Text style={styles.usuarioValue}>Apresentação Pi</Text>

                        <Text style={styles.usuarioProperty}>Preço:</Text>
                        <Text style={styles.usuarioValue}>R$ 50,00</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigationToDetail}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#8c52ff" />
                        </TouchableOpacity>
                    </View>

                )}
            />  

        </View>
    );
}