import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Log from '../components/log';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class LogScreen extends React.Component {
    render() {
        // const { logs } = this.props.logs
        return (
            <ScrollView>
                {this.props.logs.map(
                    log => <Log key={log.date} log={log} />
                )}
                <Button>
                    Add Log     
                </Button>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logs
    }
}


export default connect(mapStateToProps)(LogScreen);