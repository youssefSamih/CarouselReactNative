import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const PADDING_FROM_WINDOW = 0.9;

interface SlideProps {
    title: string;
    images: Array<string>;
}

export const Slide: React.FunctionComponent<SlideProps> = React.memo(
    ({ images, title }) => {
        const imagesWithUniqueID = images.map((img, i) => ({
            id: i,
            uri: img
        }));
        return (
            <View style={styles.SlideContainer}>
                <Text style={styles.TitleStyle}>{title}</Text>
                <View style={styles.ImagesViewContainer}>
                    {imagesWithUniqueID.map(({ uri, id }) => (
                        <Image
                            key={id}
                            source={{ uri }}
                            style={styles.ImageStyle}
                        />
                    ))}
                </View>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    SlideContainer: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageStyle: {
        width: (windowWidth / 4) * PADDING_FROM_WINDOW,
        height: (windowHeight / 8) * PADDING_FROM_WINDOW,
        marginRight: 5
    },
    ImagesViewContainer: {
        flex: 1,
        marginBottom: (windowHeight / 6) * PADDING_FROM_WINDOW,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TitleStyle: {
        fontSize: 20,
        marginTop: 50
    }
});
