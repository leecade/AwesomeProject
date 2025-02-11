

'use strict'


var React=require('react-native');
var baseCss=require('../../base/BaseCss/Base.css');

var TimerMixin = require('react-timer-mixin');


var {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    StatusBarIOS,
    ScrollView,
    TextInput,
    Dimensions,
    Animated,
    PanResponder,
    LayoutAnimation,
    InteractionManager,
    }=React;


var css=StyleSheet.create({
    mask:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor:'#000',
        opacity:0.4,
        position:'absolute',
        top:0,
        left:0,
    },
});

var Mask=React.createClass({

    propTypes:{
        /**
         *是否显示，默认为false
         */
        show:React.PropTypes.bool,
    },


    render(){
        return (
            this.props.show==true?
                <View style={css.mask}  />
                :
                null
        );
    },

});


module.exports=Mask;












