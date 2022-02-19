import React, { useState } from 'react';
import { Text, View, Button,TouchableOpacity, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { SwipeListView } from 'react-native-swipe-list-view';

function SwipeButton() {

    const [listData, setListData] = useState(
        Array(2)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
        >
        <LinearGradient start={{x: 1, y: 1}} end={{x: 0, y: 1}} 
            colors={['#696eff', '#f6a9ff']} 
            style={styles.linearGradient}>
            <View>
                <Text>I am {data.item.text} in a SwipeListView</Text>
            </View>
            </LinearGradient>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <LinearGradient start={{x: 1, y: 1}} end={{x: 0, y: 1}} 
                colors={['#f6a9ff', '#696eff']} 
                style={styles.linearGradient}>
                    <Text style={styles.backTextWhite}>Редактировать</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <LinearGradient start={{x: 1, y: 1.1}} end={{x: 0, y: 1}} 
                colors={['#696eff', '#f6a9ff']} 
                style={styles.linearGradient}>
                    <Text style={styles.backTextWhite}>Удалить</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-220}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen}
                />
            
        </View>
    );
}

export default SwipeButton;