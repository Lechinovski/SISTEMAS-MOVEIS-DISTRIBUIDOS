import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Buttons from "./buttons";

const Display = () => {
    const [valor, setValor] = useState("");

    const handleButtonPress = (value) => {
        switch (value) {
            case "=":
                const resultado = eval(valor);
                setValor(resultado.toString());
                break;
            case "CE":
                setValor("");
                break;
            case "A":
                setValor((prevValor) => prevValor.slice(0, -1));
                break;
            case "%":
                const percentage = parseFloat(valor) / 100;
                setValor(percentage.toString());
                break;
            default:
                setValor((valor) => valor + value);
                break;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.display}>{valor}</Text>
            <Buttons
                handleButtonPress={handleButtonPress}
                limparTudo={() => handleButtonPress("CE")}
                apagarNumero={() => handleButtonPress("A")}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C0C0C0",
    },
    display: {
        backgroundColor: "#FFFFFF",
        height: 150,
        textAlign: "right",
        fontSize: 50,
        padding: 10,
    },
});

export default Display;