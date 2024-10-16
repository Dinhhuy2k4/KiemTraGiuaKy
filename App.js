import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Thêm thư viện icon

export default function App() {
  const [started, setStarted] = useState(false); // Trạng thái xác định màn hình

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!started ? (
        // Màn hình chào mừng
        <ImageBackground
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/65e9/1e96/4e8f13cbdb37604e351d37d72a1eb837?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O5qjFLGKk6FlyMzNetSaH-cVrcNKehohrP-Xh9eC9PfJfkkyhTO4Mfma-1fHNgERpE~p22xEfyB8HmYa6XRjjWD-TMxM0AS6R7HPIGKVymH6t981RsEC94-JcKZqHxrYD8Uvr6Zahuv7co8RLBQklKu9dufJWOP6Hq3omcMRw7AC0feCMdWGEvbjUVN55~hfiaMZCd0Hru-ZO7ZJk0-O5685-7qJT2V01rocnjvdAFUO5J~CZ3518ltspmexCVlPG30sh7oReVDuzWvyxnVjV-NlGZkD9IRMcLk5LmNBvhU3QbtC8BdgHGDqQv59hm-utG72-HbgZqs23AGqWM-ldw__' }} // Đặt ảnh nền
          style={styles.backgroundImage}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={{ uri: '' }}
              style={styles.topImage}
              resizeMode="cover"
            />
            <Text style={styles.title}>Welcome to Our Store</Text>
            <Text style={styles.subtitle}>
              Get your groceries in as fast as one hour
            </Text>
            <TouchableOpacity 
              style={styles.getStartedButton} 
              onPress={() => setStarted(true)}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        // Màn hình nhập số điện thoại
        <View style={styles.content}>
          {/* Nút quay lại */}
          <TouchableOpacity onPress={() => setStarted(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Get your groceries with nectar</Text>

          {/* Nhập số điện thoại */}
          <View style={styles.phoneInput}>
            <Image
              source={{ uri: 'https://flagcdn.com/w320/bd.png' }} // Quốc kỳ Bangladesh
              style={styles.flag}
            />
            <Text style={styles.countryCode}>+880</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              placeholderTextColor="#aaa"
            />
          </View>

          {/* Hoặc kết nối với mạng xã hội */}
          <Text style={styles.socialText}>Or connect with social media</Text>

          {/* Nút Google với icon */}
          <TouchableOpacity style={[styles.button, styles.googleButton]}>
<Icon name="google" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}> Continue with Google</Text>
          </TouchableOpacity>

          {/* Nút Facebook với icon */}
          <TouchableOpacity style={[styles.button, styles.facebookButton]}>
            <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}> Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%', // Hoặc bạn có thể đặt giá trị cố định như 800
    resizeMode: 'cover', // Đảm bảo hình ảnh được bao phủ đúng cách
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  topImage: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    paddingVertical: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  socialText: {
    marginVertical: 15,
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row', // Đặt icon và text theo chiều ngang
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  icon: {
    marginRight: 10, // Khoảng cách giữa icon và text
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});