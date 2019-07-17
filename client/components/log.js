import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Button, Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import { DeleteLog, EditLog } from '../redux/logActions';


class Log extends React.Component {
    state = {
        deleteVisible: false,
    }
    ConfirmDelete = e => {
        console.log('this is e', e);
        this.setState({
            deleteVisible: true
        })
    }
    render() {
        const { log } = this.props;
        const netCalories = log.caloriesGained - log.caloriesLost;
        return (
            <Card>
                <Overlay
                    isVisible={this.state.deleteVisible}
                    onBackdropPress={() => this.setState({ deleteVisible: false })}>
                    <Card>
                        <Text>Are you sure you want to delete this log?</Text>
                        <Button title='Cancel' onPress={() => this.setState({ deleteVisible: false })} />
                        <Button title='Delete' onPress={() => this.props.deleteLog(log.id)} />
                    </Card>
                </Overlay>
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
                <Button title='Edit Log' onPress={() => this.props.editLog(log)} />
                <Button title='Delete Log' onPress={this.ConfirmDelete} />
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
    return {
        deleteLog: (id) => { dispatch(DeleteLog(id)) },
        editLog: (log) => { dispatch(EditLog(log)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);