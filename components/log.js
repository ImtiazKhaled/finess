import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { DeleteLog, EditLog } from '../redux/logActions';


class Log extends React.Component {
    render() {
        const { log } = this.props;
        const netCalories = log.caloriesGained - log.caloriesLost;
        return (
            <Card>
                <Text>
                    Date: {log.data}
                </Text>
                <Text>
                    Calories Lost: {log.caloriesLost}
                </Text>
                <Text>
                    Calories Gained: {log.caloriesGained}
                </Text>
                <Text>
                    Net Calories: {netCalories}
                </Text>
                 <Text>
                    A Happy Memory From Today: {log.happyMemory}
                </Text>
                <Button title='Edit Log' onPress={ () => this.props.editLog(log)}/>
                <Button title='Delete Log' onPress={ () => this.props.deleteLog(log.id)} />
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logs
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteLog: (id) => { dispatch( DeleteLog(id)) },
        editLog: (log) => { dispatch( EditLog(log)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);