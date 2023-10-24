import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

const English = (props) => {
  return (
    <View>
      <View style={styles.top}>
        <ImageBackground
          source={require('../assets/course_content.jpeg')}
          style={styles.image}
        />
        <View style={styles.menu}>
          <ImageBackground
            source={require('../assets/menus.png')}
            style={styles.pic}
          />
          <Text style={styles.words1}>English</Text>

          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}></View>
        </View>
        <View>
          <Text style={styles.words}>Course Content</Text>
        </View>
      </View>

      <View style={styles.display}>
        <View>
          {' '}
          <Image
            style={styles.icon}
            source={require('../assets/youtube.png')}
          />
        </View>
        <View style={styles.bar}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Unit 1</Text>
          <Text>the child</Text>
          <View
            style={{
              width: 200,
              height: 8,
              backgroundColor: '#fae4eb',
              borderRadius: 20,
            }}>
            <View
              style={{
                width: 100,
                height: 8,
                backgroundColor: '#d05d76',
                borderRadius: 20,
              }}></View>
          </View>
        </View>
      </View>

      <View style={styles.display}>
        <View>
          {' '}
          <Image
            style={styles.icon}
            source={require('../assets/youtube.png')}
          />
        </View>
        <View style={styles.bar}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Unit 2</Text>
          <Text>the child</Text>
          <View
            style={{
              width: 200,
              height: 8,
              backgroundColor: '#fae4eb',
              borderRadius: 20,
            }}>
            <View
              style={{
                width: 100,
                height: 8,
                backgroundColor: '#d05d76',
                borderRadius: 20,
              }}></View>
          </View>
        </View>
      </View>
      <View style={styles.display}>
        <View>
          {' '}
          <Image
            style={styles.icon}
            source={require('../assets/youtube.png')}
          />
        </View>
        <View style={styles.bar}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Unit 3</Text>
          <Text>the child</Text>
          <View
            style={{
              width: 200,
              height: 8,
              backgroundColor: '#fae4eb',
              borderRadius: 20,
            }}>
            <View
              style={{
                width: 100,
                height: 8,
                backgroundColor: '#d05d76',
                borderRadius: 20,
              }}></View>
          </View>
        </View>
      </View>
      <View style={styles.display}>
        <View>
          {' '}
          <Image
            style={styles.icon}
            source={require('../assets/youtube.png')}
          />
        </View>
        <View style={styles.bar}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Unit 4</Text>
          <Text>the child</Text>
          <View
            style={{
              width: 200,
              height: 8,
              backgroundColor: '#fae4eb',
              borderRadius: 20,
            }}>
            <View
              style={{
                width: 100,
                height: 8,
                backgroundColor: '#d05d76',
                borderRadius: 20,
              }}></View>
          </View>
        </View>
      </View>

      <View>
        <Text>General Exercises</Text>
        <View style={styles.box}>
          <TouchableOpacity
            style={{
              height: 70,
              width: 100,
              backgroundColor: '#ea2d54',
              borderRadius: 25,
              flexDirection: 'row',
            }}>
            <Image
              style={styles.icons}
              source={require('../assets/book.png')}
            />
            <Text style={{ marginTop: 20, color: 'white', fontWeight: 'bold' }}>
              Exercise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70,
              width: 100,
              backgroundColor: '#f8aea8',
              borderRadius: 25,
              flexDirection: 'row',
            }}>
            <Image
              style={styles.icons}
              source={require('../assets/volume.png')}
            />
            <Text style={{ marginTop: 20, color: 'white', fontWeight: 'bold' }}>
              Sound
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70,
              width: 100,
              backgroundColor: '#ea2d54',
              borderRadius: 25,
              flexDirection: 'row',
            }}></TouchableOpacity>
        </View>
      </View>
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
  words: {
    fontSize: 32,
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
  },
  pic: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
  },
  words1: {
    fontSize: 24,
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 80,
  },
  icon: {
    width: 70,
    height: 60,
  },
  icons: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  display: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 20,
  },
  bar: {
    marginLeft: 10,
  },
  top: {
    marginBottom: 150,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default English;
