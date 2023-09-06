import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image, Text, View, RefreshControl } from 'react-native';
import { Input as ElementsInput, Icon } from 'react-native-elements';
import { FontAwesome } from 'react-native-vector-icons';
import { useNavigation } from "@react-navigation/native"; // Importez useNavigation






const CalculatorImcScreen = () => {
  
  const navigation = useNavigation(); // Utilisez useNavigation pour obtenir l'objet de navigation
  const scrollViewRef = useRef();
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState(null);
  const [imc, setImc] = useState(0);
  const [result, setResult] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [initialImageSource, setInitialImageSource] = useState(require('../assets/imc-calculator.jpg'));




  const onRefresh = () => {
    setRefreshing(true);
    resetInputs();
    setInitialImageSource(require('../assets/imc-calculator.jpg')); // Reset initial image
    setSelectedCategory(null); // Reset selected category
    setImc(0); // Reset IMC value to 0

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };




  const handleShowImcMaigre = () => {
    navigation.navigate('ImcMaigre');
  };
  const handleShowImcNormal = () => {
    navigation.navigate('ImcNormal');
  };
  const handleShowImcSurpoids = () => {
    navigation.navigate('ImcSurpoids');
  };
  const handleShowImcObesite1 = () => {
    navigation.navigate('ImcObesite1');
  };
  const handleShowImcObesite2 = () => {
    navigation.navigate('ImcObesite2');
    };
    const handleShowImcObesite3 = () => {
      navigation.navigate('ImcObesite3');
      };


  const resetInputs = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setGender(null);
  };
  




  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  const calculateIMC = () => {
    // Vérification de l'âge (doit être au moins 18 ans)
  if (Number(age) < 18) {
    alert("L'âge doit être au moins 18 ans pour calculer l'IMC.");
    return;
  }
  if (!age || !height || !weight) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }
    const imcValue = (Number(weight) * 10000) / (Number(height) * Number(height));
    setImc(imcValue.toFixed(1));

    if (imcValue <= 18.5) {
      setResult('Maigreur');
      setSelectedCategory('maigreur');
      scrollViewRef.current.scrollTo({ y: 200, animated: true });
    } else if (imcValue <= 24.9) {
      setResult('Normal');
      setSelectedCategory('normal');
      scrollViewRef.current.scrollTo({ y: 300, animated: true });
    } else if (imcValue <= 29.9) {
      setResult('Surpoids');
      setSelectedCategory('surpoids');
      scrollViewRef.current.scrollTo({ y: 350, animated: true });
    } else if (imcValue <= 34.9) {
      setResult('Obésité de classe I');
      setSelectedCategory('obesiteI');
      scrollViewRef.current.scrollTo({ y: 400, animated: true });
    } else if (imcValue <= 39.9) {
      setResult('Obésité de classe II');
      setSelectedCategory('obesiteII');
      scrollViewRef.current.scrollTo({ y: 450, animated: true });
    } else if (imcValue >= 70) {
      alert("Cet IMC est trop important, vous avez sans doute fait une erreur : êtes-vous sur que vous mesurez "+ Number(height) +" cm et que vous pesez " + Number(weight) + " kg? Votre taille doit être en centimètres, et votre poids en kilogrammes.");
      return;
    }
    else {
      setResult('Obésité de classe III');
      setSelectedCategory('obesiteIII');
      scrollViewRef.current.scrollTo({ y: 500, animated: true });
    }
  };

  const getCategoryBackgroundColor = (category) => {
    if (category === selectedCategory) {
      switch (category) {
        case 'maigreur':
          return '#3366FF';
        case 'normal':
          return '#33CC33';
        case 'surpoids':
          return '#FFA500';
        case 'obesiteI':
            return '#FF4444';
        case 'obesiteII':
            return '#B22222';
        case 'obesiteIII':
          return '#8B0000';
        default:
          return '#000';
      }
    } else {
      return '#000';
    }
  };

  let imageSource = require('../assets/imc-calculator.jpg');
  let categoryBackgroundColor = getCategoryBackgroundColor(selectedCategory);

  switch (selectedCategory) {
    case 'maigreur':
      imageSource = require('../assets/imc-maigre.jpg');
      break;
    case 'normal':
      imageSource = require('../assets/imc-normal.png');
      break;
    case 'surpoids':
      imageSource = require('../assets/imc-surpoids.jpg');
      break;
    case 'obesiteI':
      imageSource = require('../assets/imc-obésité-1.jpg');
      break;
    case 'obesiteII':
      imageSource = require('../assets/imc-obésité.jpg');
      break;
    case 'obesiteIII':
      imageSource = require('../assets/imc-obésité-morbide.jpg');
      break;
    default:
      imageSource = require('../assets/imc-calculator.jpg');
  }

  return (
    <ScrollView 
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      ref={scrollViewRef}
      contentContainerStyle={[styles.container, {paddingBottom:60 }]}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={onRefresh}
      >
        <Icon
          type="ionicon"
          name="refresh"
          size={24}
          color="#ffc107"
          style={styles.boldIcon}
        />
      </TouchableOpacity>
      <View style={styles.inputRow}>
        <ElementsInput
          onChangeText={setAge}
          value={age}
          placeholder="Âge"
          keyboardType="numeric"
          containerStyle={[styles.inputContainer, { marginRight: 10, marginTop:40 }]}
          required={true}
        />
        <ElementsInput
          onChangeText={setHeight}
          value={height}
          placeholder="Hauteur en cm"
          keyboardType="numeric"
          containerStyle={[styles.inputContainer, { marginLeft: 10, marginTop:40 }]}
          required={true}
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.genderIcon, gender === 'homme' && styles.selectedGenderIcon]}
          onPress={() => handleGenderSelection('homme')}
        >
          <FontAwesome name="male" size={32} color={gender === 'homme' ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderIcon, gender === 'femme' && styles.selectedGenderIcon]}
          onPress={() => handleGenderSelection('femme')}
        >
          <FontAwesome name="female" size={32} color={gender === 'femme' ? '#fff' : '#000'} />
        </TouchableOpacity>

        <ElementsInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Poids en kg"
          keyboardType="numeric"
          containerStyle={styles.inputContainer}
          required={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateIMC}>
        <Text style={styles.buttonText}>Calculer</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
        <Text style={styles.imcText}>{imc}</Text>
      </View>

      <View style={styles.categoryContainer}>
        <View>
         <TouchableOpacity  onPress={handleShowImcMaigre}
          style={[
            styles.category,
            { backgroundColor: getCategoryBackgroundColor('maigreur') },
          ]}
          
        >
          <Text style={styles.categoryText}>Maigreur</Text>
          <Text style={styles.categoryRange}>{"< 18.5"}</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity  onPress={handleShowImcNormal}
          style={[
            styles.category,
            { backgroundColor: getCategoryBackgroundColor('normal') },
          ]}
        >
          <Text style={styles.categoryText}>Normal</Text>
          <Text style={styles.categoryRange}>18.5 - 24.9</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity  onPress={handleShowImcSurpoids}
          style={[
            styles.category,
            { backgroundColor: getCategoryBackgroundColor('surpoids') },
          ]}
        >
          <Text style={styles.categoryText}>Surpoids</Text>
          <Text style={styles.categoryRange}>25.0 - 29.9</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity  onPress={handleShowImcObesite1}
          style={[
            styles.category,
            { backgroundColor: getCategoryBackgroundColor('obesiteI') },
          ]}
        >
          <Text style={styles.categoryText}>Obésité de classe I</Text>
          <Text style={styles.categoryRange}>{"<=34.9"}</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity  onPress={handleShowImcObesite2}
          style={[
            styles.category,
            { backgroundColor: getCategoryBackgroundColor('obesiteII') },
          ]}
        >
          <Text style={styles.categoryText}>Obésité de classe II</Text>
          <Text style={styles.categoryRange}>{"<=39.9"}</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity  onPress={handleShowImcObesite3}
          style={[
            styles.category,
            { backgroundColor: getCategoryBackgroundColor('obesiteIII') },
          ]}
        >
          <Text style={styles.categoryText}>Obésité de classe III</Text>
          <Text style={styles.categoryRange}>{"≥ 40.0"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical:20,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  genderIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedGenderIcon: {
    backgroundColor: '#ffc107',
  },
  button: {
    backgroundColor: '#ffc107',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  imcText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop:-80,
    marginBottom:70
  },
  categoryContainer: {
    marginTop: 20,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginVertical: 5,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  categoryRange: {
    fontSize: 14,
    color: '#fff',
  },
  refreshButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  boldIcon: {
    fontWeight: 'bold',
    backgroundColor:'#000',
    padding:5,
    borderRadius:10,
  },
});

export default CalculatorImcScreen;
