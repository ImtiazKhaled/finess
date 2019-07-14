import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Log from '../components/log';
import { Button } from 'react-native-elements';
import { AddLog } from '../redux/logActions';
import { connect } from 'react-redux';

const logToAdd = {
    "id": 5,
    "happyMemory": "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
    "date": "08.01.2018",
    "caloriesLost": 2823,
    "caloriesGained": 5538
};

class LogScreen extends React.Component {
    render() {
        // onAddClick = () => {
        //     ;
        // }
        // console.log(this.props);
        return (
            <ScrollView>
                {this.props.logs.map(
                    log => <Log key={log.date} log={log} />
                )}
                <Button
                    title='Add Log'
                    onPress={() => this.props.addLog(logToAdd)} />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLog: (log) => { dispatch( 
            AddLog(log)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogScreen);