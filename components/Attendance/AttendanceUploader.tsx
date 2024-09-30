import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View, Button, Image, Alert, Text } from 'react-native';

const AttendanceUploader = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Camera permission required', 'Please enable camera access in your settings.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    } else {
      Alert.alert('Photo Cancelled', 'You did not take any photo.');
    }
  };

  const uploadImage = async (uri: string) => {
    const formData = new FormData();
    formData.append('file', {
      uri: uri, 
      name: 'photo.jpg', 
      type: 'image/jpeg', 
    } as any);

    try {
      const response = await axios.post('http://64.227.179.50:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.recognized_faces) {
        Alert.alert('Faces Detected', `Recognized: ${response.data.recognized_faces.join(', ')}`);
      } else {
        Alert.alert('No Faces Detected');
      }
    } catch (error) {
      Alert.alert('Upload error', `${error}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Take Photo" onPress={handleTakePhoto} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default AttendanceUploader;
