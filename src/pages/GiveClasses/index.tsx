import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {

    const { goBack } = useNavigation();

    return (
        <View style={styles.containter}>
            <ImageBackground
                resizeMode="contain" 
                source={giveClassesBgImage} 
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>

            </ImageBackground>
            <RectButton onPress={goBack} style={styles.button}> 
                <Text style={styles.buttonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;