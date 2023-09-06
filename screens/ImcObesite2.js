import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const ImcObesite2 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Gérer l'Obésité de Classe II</Text>
      <Image
        source={require('../assets/obesite-maladie-cardiaque.jpeg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        Si votre IMC indique une obésité de classe II, il est crucial de travailler avec un professionnel de la santé pour élaborer un plan de gestion. Adoptez une alimentation équilibrée riche en légumes, en protéines maigres et en grains entiers. Limitez les aliments transformés et sucrés. L'activité physique doit également être intégrée à votre routine pour brûler des calories et améliorer votre bien-être général.
      </Text>
      <Text style={styles.headerText}>Prioriser la Santé et le Bien-Être</Text>
      <Image
         source={require('../assets/medecin-avec-des-dossiers-medicaux.jpeg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        L'obésité de classe II peut augmenter le risque de problèmes de santé tels que les maladies cardiaques et le diabète. En travaillant sur la perte de poids progressive, vous réduirez ces risques. Concentrez-vous sur les habitudes positives, telles que l'activité physique régulière et la gestion du stress. Fixez-vous des objectifs atteignables et mesurez vos progrès au fil du temps. En mettant l'accent sur la santé et le bien-être, vous serez en mesure de mieux gérer l'obésité de classe II.
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

export default ImcObesite2;
