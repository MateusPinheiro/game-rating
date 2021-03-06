import React from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../../assets/logo.png')}
        />
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        height: 40,
        width: 350,
        resizeMode: 'center',
    },
    button:{
        width: 100,
        alignItems:'center',
        justifyContent: 'center'
    }
});


export default Header;