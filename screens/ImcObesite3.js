import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const ImcObesite3 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Gérer l'Obésité de Classe III</Text>
      <Image
        source={require('../assets/consequences-obesite-morbide-370x247.jpg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        L'obésité de classe III est associée à des risques importants pour la santé. Travailler avec un professionnel de la santé est essentiel pour élaborer un plan de gestion adapté. Une alimentation équilibrée et un exercice régulier sont des composantes clés. Réduisez la consommation d'aliments riches en calories vides et privilégiez les aliments nutritifs. L'activité physique doit être progressive et adaptée à vos besoins.
      </Text>
      <Text style={styles.headerText}>Chercher un Soutien Médical</Text>
      <Image
        source={require('../assets/docteur-mesurant-masse-graisseuse-768x512.jpg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        L'obésité de classe III peut nécessiter des approches médicales spécifiques, telles que la chirurgie bariatrique. Il est important de consulter un professionnel de la santé pour discuter de vos options et obtenir un soutien médical adéquat. En travaillant avec une équipe médicale, vous pouvez aborder l'obésité de classe III de manière holistique et prendre des mesures pour améliorer votre santé globale.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignItems: "center",
    textAlign: "center",
    color: "#ffc107",
  },
  bodyText: {
    fontSize: 16,
  },
  homeImg: {
    width: 256,
    height: 256,
    borderRadius: 64,
    margin: 16,
  },
});

export default ImcObesite3;
