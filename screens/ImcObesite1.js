import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const ImcObesite1 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Gérer l'Obésité de Classe I</Text>
      <Image
        source={require('../assets/sucres-rapides-sante-1024x621.jpg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        Si votre IMC indique une obésité de classe I, il est important de prendre des mesures pour améliorer votre santé. Commencez par consulter un professionnel de la santé pour discuter d'un plan de gestion personnalisé. Une combinaison d'alimentation équilibrée et d'exercice régulier peut contribuer à réduire progressivement le poids. Réduisez les portions, optez pour des aliments nutritifs et évitez les excès de calories. L'activité physique peut aider à brûler les graisses et à renforcer la santé cardiaque.
      </Text>
      <Text style={styles.headerText}>Adopter des Habitudes Durables</Text>
      <Image
        source={require('../assets/resolution-perdre-poids-1536x1024.jpg')}
        style={styles.homeImg}
      />
      <Text style={styles.bodyText}>
        L'obésité de classe I ne se gère pas en une seule nuit, mais avec des habitudes durables et positives. Fixez-vous des objectifs réalistes et mesurables, tels que l'augmentation de l'activité physique ou la réduction de la consommation de sucre. Privilégiez les changements de mode de vie sur les régimes restrictifs. Adoptez des habitudes alimentaires équilibrées et trouvez des activités physiques que vous appréciez. Avec le temps, ces changements contribueront à réduire le poids et à améliorer votre bien-être général.
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

export default ImcObesite1;
