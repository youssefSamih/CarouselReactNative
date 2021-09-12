/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Carousel } from 'Components';

const App: React.FunctionComponent = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    return (
        <SafeAreaView style={[backgroundStyle, styles.Container]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Carousel />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
});

export default App;
