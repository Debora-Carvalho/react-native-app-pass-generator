import React from "react";
import {View, Text} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyles';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View>
                <BatTextInput />
            </View>

            <Text>Sim. Com o tema do Batman. </Text>
            <StatusBar style="auto" />
        </View>
    );
};

