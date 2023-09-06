import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const ImcMaigre = () => {


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>suis-je « trop » maigre ?</Text>
      <Image  source={require('../assets/reussir-a-prendre-du-poids-370x247.jpg')} 
          style={styles.homeImg}/>
      <Text style={styles.bodyText}>
      Un poids trop faible peut être la conséquence (mais aussi la cause) de problèmes médicaux. Si votre IMC est inférieur à 16,5, il faudra en déterminer l'origine : si elle est médicale, seul un médecin pourra vous aider. Si ce n'est pas le cas, vous avez un métabolisme élevé, c'est-à-dire que vous brûlez les calories très rapidement : quelques solutions existent pour prendre du poids malgré tout.
      </Text>
      <Text style={styles.headerText}>Comment prendre du poids ?</Text>
      
      <Image  source={require('../assets/les-proteines-pour-grossir.jpg')} 
          style={styles.homeImg}/>
      <Text style={styles.bodyText}>
      La première solution consiste tout simplement à consommer plus de calories. Attention, il n'est pas question pour autant de manger n'importe quoi : des aliments trop gras ou sucrés auraient bien d'autres répercussions négatives ! Privilégiez les féculents et bons lipides (noix, beurre d'amande...) et tentez de prendre 5 repas moyens dans la journée plutôt que 3 gros. Vous pouvez également prendre du poids grâce au sport – à condition, encore une fois, de bien le choisir ! Éliminez les activités cardio (telles que la course), qui brûlent beaucoup de graisses. Privilégiez plutôt la musculation. Elle vous permettra de développer votre masse musculaire, plus lourde que la masse graisseuse, donc de prendre du poids tout en vous façonnant une silhouette harmonieuse.
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

export default ImcMaigre;
