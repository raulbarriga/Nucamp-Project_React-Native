import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { PARTNERS } from '../shared/partners';
import { Card, ListItem } from 'react-native-elements';

const Mission = () => {
    return (
        <Card title="Our Mission">
            <View>
                <Text>
                    We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                </Text>
            </View>
        </Card>
    )
}

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    };

      renderPartnerItem = ({item}) => {
        //   console.log(item)
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };

    render() {
        
        return (
            <ScrollView>
                <Mission />
                <Card title="Community Partners">
                    <FlatList
                        data={this.state.partners}
                        renderItem={this.renderPartnerItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default About;