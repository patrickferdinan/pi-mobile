import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';



import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const event = route.params.event;
    const message = `Olá ${event.userName}, gostaria de participar do seu evento: ${event.name} `;

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Nome do organizador: ${event.userName}`,
            recipients: [event.UserEmail],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${event.UserPhone} &text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#8c52ff" />
                </TouchableOpacity>
            </View>

            <View style={styles.event}>
                <Text style={[styles.usuarioProperty, { marginTop: 0 }]}>Evento:</Text>
                <Text style={styles.usuarioValue}>{event.name}</Text>

                <Text style={styles.usuarioProperty}>Inicio do Evento:</Text>
                <Text style={styles.usuarioValue}>{event.initialData}</Text>

                <Text style={styles.usuarioProperty}>Termino do Evento:</Text>
                <Text style={styles.usuarioValue}>{event.finalData}</Text>

                <Text style={styles.usuarioProperty}>Preço:</Text>
                <Text style={styles.usuarioValue}>
                    {Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' })
                        .format(event.price)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.organization}>Participe Deste Evento!</Text>

                <Text style={styles.description}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}