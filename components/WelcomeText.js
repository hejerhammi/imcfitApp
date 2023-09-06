import { View, Text, StyleSheet } from "react-native";

const WelcomeText = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: "100%",
        backgroundColor: "#ffc107",
        color: "#fff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 2,
    },
    text: {
        fontSize: 24,
        color: "#fff",
        textAlign: "center",
    },
});

export default WelcomeText;
