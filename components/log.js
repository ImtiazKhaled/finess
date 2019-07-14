import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Card } from 'react-native-elements';


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
            </Card>
        );
    }
}

export default Log;