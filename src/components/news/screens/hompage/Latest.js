import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Latest = ({thumb, topic, title, avatar, author, time}) => {
    return (
        <View style={myStyle.itemLatest}>
            <Image style={myStyle.newsImage}
                source={thumb} />
            <View style={myStyle.contentLatest}>
                <Text style={myStyle.fontNationality}>{topic}</Text>
                <Text 
                numberOfLines={2}
                style={myStyle.fontTitleTrending}>
                    {title}
                </Text>
                <View style={myStyle.infomation}>
                    <View style={myStyle.infomationA} >
                        <Image style={myStyle.logoNews}
                            source={avatar} />
                        <Text style={myStyle.fontNewsName}>{author}</Text>
                        <Image style={myStyle.logoTime}
                            source={require('../../../../media/logoTime.png')} />
                        <Text style={myStyle.fontTime}>{time}</Text>
                    </View>
                    <Image style={myStyle.dotIcon}
                        source={require('../../../../media/3dot_Icon.png')} />
                </View>
            </View>
        </View>
    )
}

export default Latest

const myStyle = StyleSheet.create({
    contentLatest: {
        // backgroundColor:'red',
        width:'70%',
    },

    newsImage: {
        width: 96,
        height: 96,
        borderColor: '#C4C4C4',
        borderRadius: 6,
        backgroundColor: '#C4C4C4',
        marginRight: 4,
    },
    itemLatest: {

        marginBottom: 16,
        flexDirection: 'row',
        // width:'100%',
    },
    dotIcon: {
        // height:1.75,
        marginTop: 3,
        marginRight: 1.75,
        // backgroundColor:'red',
    },

    fontTime: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginLeft: 5.17,
        // backgroundColor:'red'
    },

    logoTime: {
        marginTop: 4.17,
    },

    fontNewsName: {
        fontFamily: 'Arial',
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginLeft: 4,
        marginRight: 13.17,
        // backgroundColor:'red'
    },

    logoNews: {
    },

    infomationA: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // backgroundColor:'red'
    },

    infomation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'red'
    },
    fontTitleTrending: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
        paddingBottom: 4,
        // backgroundColor:'red'
    },

    fontNationality: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        paddingBottom: 4,
        // backgroundColor:'red'
    },

    imageforTrending: {
        width: '100%',
        height: 183,
        borderWidth: 1,
        borderColor: '#4E4B66',
        borderRadius: 6,
        backgroundColor: '#C4C4C4',
        marginBottom: 8,
    },
})