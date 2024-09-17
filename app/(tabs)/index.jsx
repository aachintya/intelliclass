import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login pressed');
    router.push('/home');

  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.loginContainer}>
            <Image
              source={require('../../assets/images/intelliclasswhite.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#c0c0c0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#c0c0c0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Dark Charcoal
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('5%'),
  },
  loginContainer: {
    width: wp('80%'),
    maxWidth: 400,
    backgroundColor: '#2a2a2a', 
    padding: wp('5%'),
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    width: wp('40%'),
    height: wp('40%'),
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#f8f8f8', 
    marginBottom: hp('2%'),
  },
  input: {
    width: '100%',
    backgroundColor: '#333333', 
    color: '#f8f8f8',
    padding: wp('4%'),
    borderRadius: 5,
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#2a2d72', 
    padding: wp('4%'),
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#f8f8f8', 
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
});