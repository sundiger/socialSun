import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        height: 500,
        // marginHorizontal: 20,
        // marginVertical: 10,
        alignItems: 'center',

    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        // alignItems: 'center',
        // backgroundColor: '#CCC',
        // backgroundColor: 'rgba(255,255,255,1)',
        // borderColor: 'black',
        // borderRadius: 10,
        // borderWidth: 1,
        // justifyContent: 'center',
        // height: 500,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    rowBack: {
        alignItems: 'center',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 110,
        height: 500,
        // marginVertical: 40,

    },
    backRightBtnLeft: {
        right: 110,
        
    },
    backRightBtnRight: {
        right: 0,
    },
})