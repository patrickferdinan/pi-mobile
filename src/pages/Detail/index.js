import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';



import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá <organizador>, gostaria de participar do seu evento: "Projeto Integrador" ';

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Projeto Integrador',
            recipients: ['patrick.ferdinan@hotmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5534988123346 Gtext=${message}`);
    }

    return(
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#8c52ff" />
                </TouchableOpacity>
            </View>

            <View style={styles.event}>
                <Text style={[styles.usuarioProperty, {marginTop: 0 }]}>Evento:</Text>
                <Text style={styles.usuarioValue}>Apresentação Pi</Text>

                <Text style={styles.usuarioProperty}>Inicio do Evento:</Text>
                <Text style={styles.usuarioValue}>01/06/2020 19:15:00</Text>

                <Text style={styles.usuarioProperty}>Termino do Evento:</Text>
                <Text style={styles.usuarioValue}>01/06/2020 22:40:00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.organization}>Participe deste evento!</Text>

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