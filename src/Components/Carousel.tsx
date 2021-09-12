import React from 'react';
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import { Slide, slideList } from 'Components';

interface Styles {
    locationCaptureButton: any; // any type because style element as function not supported yet in typescript for StyleSheet.create;
    Container: ViewStyle;
    SliderView: ViewStyle;
    navigationButtonsContainer: ViewStyle;
    textStyle: TextStyle;
    dividerStyle: ViewStyle;
}

export const Carousel: React.FunctionComponent = () => {
    const [stepIndex, setStepIndex] = React.useState(0);
    const indexRef = React.useRef(stepIndex);
    const flatListRef = React.useRef() as React.RefObject<FlatList>;
    const nextStep = () => {
        if (indexRef.current < slideList.length - 1) {
            indexRef.current = indexRef.current + 1;
            flatListRef.current?.scrollToIndex({
                index: indexRef.current,
                animated: true
            });
            setStepIndex(indexRef.current);
        }
    };

    const previousStep = () => {
        if (indexRef.current > 0) {
            indexRef.current = indexRef.current - 1;
            flatListRef.current?.scrollToIndex({
                index: indexRef.current,
                animated: true
            });
            setStepIndex(indexRef.current);
        }
    };

    const onScroll = React.useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            const slideSize = event.nativeEvent.layoutMeasurement.width;
            const index = event.nativeEvent.contentOffset.x / slideSize;
            const roundIndex = Math.round(index);
            const distance = Math.abs(roundIndex - index);
            const isNoMansLand = distance > 0.4;

            if (roundIndex !== indexRef.current && !isNoMansLand) {
                setStepIndex(roundIndex);
                indexRef.current = roundIndex;
            }
        },
        []
    );

    return (
        <View style={styles.Container}>
            <FlatList
                ref={flatListRef}
                data={slideList}
                style={styles.SliderView}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={1}
                initialScrollIndex={0}
                pagingEnabled
                horizontal
                onScroll={onScroll}
                renderItem={({ item }) => <Slide {...item} />}
            />
            <View style={styles.navigationButtonsContainer}>
                <TouchableOpacity
                    onPress={previousStep}
                    disabled={indexRef.current === 0}
                    style={styles.locationCaptureButton(indexRef.current === 0)}
                >
                    <Text style={styles.textStyle}>Prev Step</Text>
                </TouchableOpacity>
                <View style={styles.dividerStyle} />
                <TouchableOpacity
                    onPress={nextStep}
                    disabled={indexRef.current === slideList.length - 1}
                    style={styles.locationCaptureButton(
                        indexRef.current === slideList.length - 1
                    )}
                >
                    <Text style={styles.textStyle}>Next Step</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create<Styles>({
    Container: {
        flex: 1
    },
    SliderView: {
        flex: 1
    },
    navigationButtonsContainer: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    locationCaptureButton: (disabled: boolean): ViewStyle => ({
        backgroundColor: disabled ? 'grey' : '#246EE9',
        padding: 10,
        borderRadius: 10
    }),
    dividerStyle: {
        borderRightWidth: 1,
        borderColor: 'grey',
        height: 30
    },
    textStyle: {
        color: 'white'
    }
});
