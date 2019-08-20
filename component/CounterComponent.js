import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { incrementAction, decrementAction } from '../actions/CounterActions';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterButton: {
        backgroundColor: "#F0F0F0",
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 10,
    },
    counter: {
        fontSize: 20,
        fontWeight: '600'
    },
    value: {
        fontSize: 40,
        fontWeight: '600',
        marginHorizontal: 30,
    },
    heading: {
        fontSize: 40,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonBorderArea: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 5
    }
})

class Counter extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonBorderArea}>
                    <Text style={styles.heading}>Counter</Text>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity
                            style={styles.counterButton}
                            onPress={this.props.increment}
                        >
                            <Text style={styles.counter}>+</Text>
                        </TouchableOpacity>

                        <Text style={styles.value}>{this.props.counter}</Text>

                        <TouchableOpacity
                            style={styles.counterButton}
                            onPress={this.props.decrement}
                        >
                            <Text style={styles.counter}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
};

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
