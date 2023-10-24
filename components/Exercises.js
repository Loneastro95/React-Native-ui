import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

const Exercises = (props) => {
  return (
    <View>
      <View style={styles.top}>
        <View>
          <ImageBackground
            source={require('../assets/high-angle-smiley-teenage-girl-library.jpg')}
            style={styles.image}
          />
          <View style={styles.menu}>
            <ImageBackground
              source={require('../assets/left.png')}
              style={styles.pic}
            />
            <Text style={styles.words1}>English</Text>

            <View style={{backgroundColor: 'white', width: 40, height: 40, borderRadius: 50}}></View>
          </View>
          <View style={styles.container}>
            <Text style={styles.words}>Exercises</Text>
          </View>
        </View>
      </View>
      <View style={styles.writing}>
      <Text style={{fontWeight: 'bold', fontSize: 30,color: '#ef2e5b',}}>CHAPTER 1</Text>
      <Text style={{fontWeight: 200, fontSize: 20}}>Please select the correct <br/> meaning</Text>
      </View>
      <View style={styles.input}>
      <Text style={styles.text}>Hola, Buenos Dias</Text>
        <TouchableOpacity style={styles.btn}>Hello Good Night </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>Hello Good Evening </TouchableOpacity>        
        <TouchableOpacity style={styles.btn1}>Hello Good Morning </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn4}>Next </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'start',
    height: 250,
    width: 350,
  },
    btn: {
    width: 289,
    height: 52,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#f6b0ae',
    borderWidth: 1,
    textAlign: 'center',
    color: '#f6b0ae',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 34,
  },
  btn1: {
    width: 289,
    height: 52,
    borderRadius: 20,
    backgroundColor: '#ef2e5b',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 34,
  },
      btn2: {
    width: 289,
    height: 52,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#f6b0ae',
    borderWidth: 1,
    textAlign: 'center',
    color: '#f6b0ae',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 1,
    marginLeft: 34,
  },
    btn4: {
    width: 289,
    height: 42,
    borderRadius: 20,
    backgroundColor: '#f6b0ae',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 34,
    marginTop: 50,
  },
  pic:{
    width: 40,
    height: 40,
    backgroundColor: 'white',
    
  },
  words: {
    fontSize: 32,
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
  },
    words1: {
    fontSize: 24,
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
  },
  writing:{
    marginBottom: 30,
    marginLeft: 20
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 80,
  },
  top: {
    marginBottom: 50,
    backgroundColor: 'red',
    height: 250,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20
  },
});

export default Exercises;
