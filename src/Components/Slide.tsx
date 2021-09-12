import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const PADDING_FROM_WINDOW = 0.9;

interface SlideProps {
    title: string;
    images: Array<string>;
}

export const Slide: React.FunctionComponent<SlideProps> = React.memo(
    ({ images, title }) => (
        <View style={styles.SlideContainer}>
            <Text>{title}</Text>
            <View style={styles.GridImageStyle}>
                <View style={styles.ImageViewColumns}>
                    <Image
                        source={{
                            uri: images[
                                Math.floor(Math.random() * images.length)
                            ]
                        }}
                        style={styles.ImageStyle}
                    />
                    <Image
                        source={{
                            uri: images[
                                Math.floor(Math.random() * images.length)
                            ]
                        }}
                        style={styles.ImageStyle}
                    />
                </View>
                <View style={styles.ImageViewColumns}>
                    <Image
                        source={{
                            uri: images[
                                Math.floor(Math.random() * images.length)
                            ]
                        }}
                        style={styles.ImageStyle}
                    />
                    <Image
                        source={{
                            uri: images[
                                Math.floor(Math.random() * images.length)
                            ]
                        }}
                        style={styles.ImageStyle}
                    />
                </View>
            </View>
        </View>
    )
);

const styles = StyleSheet.create({
    SlideContainer: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GridImageStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    ImageViewColumns: {
        flex: 1
    },
    ImageStyle: {
        width: windowWidth / 2,
        height: (windowHeight / 2) * PADDING_FROM_WINDOW
    }
});
