import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const ButtonFormat = ({ src }) => {
    return (
        <TouchableOpacity style={{ margin: 8 }}>
            <Image source={src} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    )
}
const CreateNews = () => {
    const [title, setTitle] = useState('Healthy Living: Diet and Exercise Tips & Tools for Success')
    const [content, setContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec venenatis lectus, et dapibus eros. Praesent id magna quis purus pharetra scelerisque ut quis felis. Duis dictum efficitur purus et blandit. Duis vel consequat dui. Nullam euismod, nisl eu fermentum convallis, arcu lectus sagittis ipsum, in elementum tortor purus vitae ligula. Mauris at enim elementum, laoreet metus sit amet, cursus orci. Sed nec elit libero. In accumsan mi non sollicitudin tincidunt. Proin molestie orci id pulvinar placerat.')
    const [image, setImage] = useState(null)

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnAddImage}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/images/plus.png')} />
                        <Text style={{ marginTop: 8 }}>Add Cover Photo</Text>
                    </View>
                </TouchableOpacity>
                <TextInput multiline value={title} placeholder='News title' style={styles.inputTitle} />
                <TextInput multiline value={content} placeholder='Add News/Article' style={styles.inputContent} />
                <View style={styles.formatBar}>
                    <ButtonFormat src={require('../../../assets/images/bold.png')} />
                    <ButtonFormat src={require('../../../assets/images/italic.png')} />
                    <ButtonFormat src={require('../../../assets/images/list_order.png')} />
                    <ButtonFormat src={require('../../../assets/images/list_unorder.png')} />
                    <ButtonFormat src={require('../../../assets/images/link.png')} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 0.5 }}>
                <View style={styles.toolBar}>
                    <ButtonFormat src={require('../../../assets/images/font_size.png')} />
                    <ButtonFormat src={require('../../../assets/images/align_left.png')} />
                    <ButtonFormat src={require('../../../assets/images/add_image.png')} />
                    <ButtonFormat src={require('../../../assets/images/more.png')} />
                </View>
                <TouchableOpacity style={{ margin: 14, backgroundColor: '#EEF1F4', borderRadius: 6, paddingHorizontal: 10 }}>
                    <Text style={{ color: '#A0A3BD', margin: 14 }}>Publish</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CreateNews

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        backgroundColor: 'white',
        flex: 1,
    },
    inputTitle: {
        marginVertical: 8,
        fontSize: 24,
        color: '#050505',
        borderBottomWidth: 1.5,
        borderBottomColor: '#A0A3BD',
    },
    inputContent: {
        marginVertical: 8,
        color: '#4E4B66'
    },
    btnAddImage: {
        marginVertical: 8,
        borderRadius: 6,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF1F4'
    },
    formatBar: {
        position: 'absolute',
        left: 24,
        bottom: 8,
        paddingHorizontal: 8,
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 0,
        elevation: 5,
    },
    toolBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
    }
})