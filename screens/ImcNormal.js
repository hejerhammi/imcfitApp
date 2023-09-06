import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const ImcNormal = () => {


  return (
    <ScrollView style={styles.container}>
  <Text style={styles.headerText}>Maintenir un IMC Normal</Text>
  <Image
    source={require('../assets/poids-ideal-femme-1m70-370x247.jpg')}
    style={styles.homeImg}
  />
  <Text style={styles.bodyText}>
    Maintenir un IMC dans la plage normale est un objectif essentiel pour une santé optimale. Un IMC normal reflète un équilibre entre le poids et la taille de votre corps. Pour maintenir cette gamme saine, privilégiez une alimentation équilibrée comprenant une variété de nutriments essentiels. Les légumes, les fruits, les protéines maigres et les grains entiers doivent constituer la base de votre alimentation. De plus, une activité physique régulière est cruciale.  Un mode de vie actif et équilibré contribuera à maintenir un IMC normal et à préserver votre bien-être général.
  </Text>
  <Text style={styles.headerText}>Adopter un Mode de Vie Sain</Text>
  <Image
    source={require('../assets/vie-saine-370x247.jpg')}
    style={styles.homeImg}
  />
  <Text style={styles.bodyText}>
    Garder un IMC normal va au-delà de l'alimentation et de l'exercice. Adoptez un mode de vie sain en gérant le stress, en dormant suffisamment et en restant hydraté. Le sommeil régénérant favorise la récupération musculaire et aide à maintenir un poids sain. Évitez les régimes extrêmes et les restrictions excessives, car ils peuvent perturber votre métabolisme et entraîner des fluctuations de poids. Pratiquez des activités qui vous procurent de la joie et réduisez la consommation d'alcool et de tabac. </Text>
    <Text style={styles.bodyText}>
    En intégrant ces habitudes positives dans votre quotidien, vous soutiendrez votre IMC normal et votre bien-être global.
  </Text>
</ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom:20
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignItems:"center",
    textAlign:"center",
    color:"#ffc107",
  },
  bodyText: {
    fontSize: 16,
  },
 
  homeImg:{
    width:256,
    height:256,
    borderRadius:64,
    margin:16,
},
  
});

export default ImcNormal;
