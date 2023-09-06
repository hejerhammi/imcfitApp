import React from'react';
import{StyleSheet,View,Image, Button}from'react-native';
import{WelcomeText}from '../components';




class HomeScreen extends React.Component{
    render(){
        const goToClaculator = () => {
            this.props.navigation.navigate('CalculatorScreen');
        }
        return(
<View style={styles.container}>
    <WelcomeText 
    text="IMC FIT"/>
          <Image  source={require('../assets/icon.png')} 
          style={styles.homeImg}
    />
   
        </View>
        )
    }}

    const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
        },
            homeImg:{
                width:256,
                height:256,
                borderRadius:64,
                margin:16,
            },
            
        })
    export default HomeScreen;