import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AttendanceUploader: React.FC = () => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    const handleTakePhoto = async () => {
        // Ask the user for permission to access the camera
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Camera permission required', 'Please enable camera access in your settings.');
            return;
        }

        // Launch the camera to take a photo
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            Alert.alert('Photo Taken', 'You have successfully taken a photo.');
        } else {
            Alert.alert('Photo Cancelled', 'You did not take any photo.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Take Attendance Photo</Text>
            <Button title="Take Photo" onPress={handleTakePhoto} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default AttendanceUploader;
