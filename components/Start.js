import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Start = (props) => {
  return (
    <View>
    <View>
      <ImageBackground
        source={require('../assets/two_people1.jpeg')}
        
        style={styles.image}
      /><View style={styles.menu}>
          <ImageBackground
            source={require('../assets/menus.png')}
            style={styles.pic}
          />
          

          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}></View>
        </View>
      <View style={styles.container}>
        <Text style={styles.words}>
          Easy and <br /> quick
          <br /> Learn <br /> English
          <br /> online!{' '}
        </Text>
      </View>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.btn}>Start </TouchableOpacity>
        <TouchableOpacity style={styles.btn1}>Sign Up </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'start',
    
  },
  btn: {
    width: 289,
    height: 42,
    borderRadius: 20,
    backgroundColor: '#f6b0ae',
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 600,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 100,
    marginLeft: 34,
  },
  btn1: {
    width: 289,
    height: 42,
    borderRadius: 20,
    backgroundColor: '#ef2e5b',
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 600,
    justifyContent: 'center',
    marginLeft: 34,
  },
    pic: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
  },
  words: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
    image: {
    flex: 1,
    justifyContent: 'start',
    height: 450,
    width: 350,

  },
  input:{
    marginTop: 10,
  } ,
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 115,
  },
});

export default Start;
