import { StyleSheet, Text, View, Image } from 'react-native';

const Course = props => {
    /* Component Course - properties - */
    return  (
        /* Build up your tile structure here */
        <View style={styles.tile}>
            <Image style={styles.tileImage} source={require('./../assets/courseImages/macbook-code.jpg')}/>

            <View style={styles.tileDetail}>
                <Text styele={styles.tileHeader}>{props.title}</Text>
                <Text styele={styles.tileText}>{props.subtitle}</Text>
            </View>    
        </View>
    )
}

export default Course;

const styles = StyleSheet.create({
    tile: {
        flexBasis: '46%',//200
        borderRadius: 5,
        borderColor: '#B4B8DA',
        borderWidth: 1,
        borderStyle: 'solid',
        marginVertical: '2%',
    
      },
      tileImage: {
        width: '100%',
        maxHeight: 110,
        overflow: 'hidden',
      },
      tileDetail: {
        padding: 10,
      },
      tileHeader: {
        fontSize: 22,
        fontWeight: '600',
      },
      tileText: {
        fontSize: 16,
        fontWeight: '500',
      }
    });