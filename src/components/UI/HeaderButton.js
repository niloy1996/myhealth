import React from 'react';
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons';
//import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={Icon} 
            iconSize={23} 
            color={Platform.OS === 'android' ? 'black' : Colors.primary}
        />
    );
};
export default CustomHeaderButton;