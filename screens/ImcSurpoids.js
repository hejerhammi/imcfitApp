import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const ImcSurpoids = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Gérer le Surpoids</Text>
      <Image
        source={require('../assets/grossir-attention-1024x683.jpg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        Si votre IMC indique que vous êtes en surpoids, il peut être bénéfique de prendre des mesures pour atteindre un poids santé. Adopter une approche progressive et durable est essentielle. Commencez par ajuster vos habitudes alimentaires en réduisant les portions et en privilégiant les aliments nutritifs. Les légumes, les fruits, les protéines maigres et les grains entiers doivent être privilégiés. Engagez-vous également dans une activité physique régulière. L'exercice peut aider à brûler les calories en excès et à renforcer votre santé globale.
      </Text>
      <Text style={styles.headerText}>Prioriser la Santé</Text>
      <Image
        source={require('../assets/metabolisme-alimentation-1536x1024.jpg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        Lorsque vous gérez le surpoids, concentrez-vous sur les améliorations de la santé plutôt que sur les chiffres de la balance. Fixez-vous des objectifs réalistes et célébrez les petites victoires le long du chemin. Évitez les régimes draconiens qui peuvent être inefficaces à long terme. Au lieu de cela, adoptez un mode de vie équilibré et durable axé sur la santé. Gardez à l'esprit que chaque pas que vous faites vers un poids plus sain contribue à améliorer votre bien-être global.
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

export default ImcSurpoids;
