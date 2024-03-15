import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Buttons = ({ handleButtonPress, limparTudo, apagarNumero }) => {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.botao} onPress={limparTudo}>
                    <Text style={styles.botaoText}>CE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress("%")}>
                    <Text style={styles.botaoText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={apagarNumero}>
                    <Text style={styles.botaoText}>A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress("/")}>
                    <Text style={styles.botaoText}>/</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(7)}>
                    <Text style={styles.botaoText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(8)}>
                    <Text style={styles.botaoText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(9)}>
                    <Text style={styles.botaoText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress("*")}>
                    <Text style={styles.botaoText}>x</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(4)}>
                    <Text style={styles.botaoText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(5)}>
                    <Text style={styles.botaoText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(6)}>
                    <Text style={styles.botaoText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress("-")}>
                    <Text style={styles.botaoText}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(1)}>
                    <Text style={styles.botaoText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(2)}>
                    <Text style={styles.botaoText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(3)}>
                    <Text style={styles.botaoText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress("+")}>
                    <Text style={styles.botaoText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.botao} onPress={() => { }}>
                    <Text style={styles.botaoText}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(0)}>
                    <Text style={styles.botaoText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress(",")}>
                    <Text style={styles.botaoText}>,</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => handleButtonPress("=")}>
                    <Text style={styles.botaoText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#C0C0C0',
    },
    row: {
        flexDirection: 'row',
        gap: 5,
    },
    botao: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
        borderColor: '#000000',
    },
    botaoText: {
        fontSize: 20,
        color: '#000000',
    },
});

export default Buttons;