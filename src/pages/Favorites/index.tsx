import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';


import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
    
    const [favotires, setFavorites] = useState([]);
    
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                setFavorites(JSON.parse(response));
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favotires.map((teacher: Teacher) => <TeacherItem key={teacher.id} favorited teacher={teacher}/>)}
            </ScrollView>
        </View>
    );
}

export default Favorites;