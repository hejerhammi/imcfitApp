import React from 'react';
import { StyleSheet, View, Text, SectionList, Linking, TouchableOpacity } from 'react-native';
import * as RNElements from '@rneui/base';

const LinkText = ({ text, url }) => {
    const handleLinkPress = () => {
      Linking.openURL(url);
    };
  
    return (
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={styles.linkText}>{text}</Text>
      </TouchableOpacity>
    );
  };

const AboutScreen = ({}) => {
    
    const aboutSectionsDatas = [
        {
        title: "Développeur",
        data: ["Hammi Hejer"],
        },
        {
        title: "Type de projet",
        data: ["Open-Source"]
        },
        {
        title: "Date de création",
        data: ["Juillet 2023"]
        },
        {
        title: "Informations complémentaires",
        data: ["Découvrez votre indice de masse corporelle (IMC) et obtenez des informations sur votre état de santé grâce à notre application ImcFit. Pour des calculs précis et divers, des articles informatifs et plus de ressources,"]
        }
        ];
        return(
           <View style={styles.container}>
            <RNElements.Avatar
            size="xlarge"
            rounded
            source={require("../assets/74y4.gif")}
            margin={32}
            />
                <SectionList
                  sections={aboutSectionsDatas}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => (
                  <View style={styles.item}>
                  <Text
                     style={styles.sectionListTitle}>{item}</Text>
            </View>
            )}
                renderSectionHeader={({ section: { title } }) => (
                   <Text
                       style={styles.sectionListHeader}>{title}</Text>
                    )}/>
                    <LinkText text="Visitez notre site web ImcFitBlog.fr" url="https://imcfitblog.fr/" />

           </View>
            
        );
    }

    const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
        },
        sectionList: {
            width:"100%",
            flex:1,
            textAlign: "center",
            },
            sectionListTitle: {
            fontSize: 18,
            textAlign: "center",
            color:"#666",
            },
            sectionListHeader: {
            fontSize: 22,
            fontWeight:"700",
            backgroundColor: '#fff',
            padding: 10,
            textAlign: "center",
            },
            item: {
            paddingLeft: 15,
            paddingRight: 15,
            marginVertical: 10,
            },
            linkText: {
                color: '#0000FF',
                textDecorationLine: 'underline',
                fontSize: 20,
                fontWeight:"700",
              },
            
        });

export default AboutScreen;