import React from 'react';
import { Text, View,Dimensions,StyleSheet,Image } from 'react-native';
import car1 from '../assets/images/car1.png'


const PostCardItem = () => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            width:Dimensions.width,
            backgroundColor: 'white',
            elevation: 2
        }}>
            <View>
                <View>
                    {/* <Image source={car1} style ={{width:305,height:159}}/> */}
                <Image 
                source={{uri:'https://www.bing.com/images/search?view=detailV2&ccid=Bt86cFV6&id=FD3039B4748B1268506EB21557783B6A0FEAC910&thid=OIP.Bt86cFV63I4JaLKFhk6sPwHaEK&mediaurl=https%3a%2f%2fdm0qx8t0i9gc9.cloudfront.net%2fthumbnails%2fvideo%2f4ZrVLdVKeijzurndz%2fpeople-emotion-and-facial-expression-concept-face-of-happy-smiling-middle-aged-woman-at-office_rleqp4y7g_thumbnail-1080_09.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.06df3a70557adc8e0968b285864eac3f%3frik%3dEMnqD2o7eFcVsg%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=people+images&simid=608026000685872440&FORM=IRPRST&ck=DE46720FF972EE0D6CE37CC5ED9D5076&selectedIndex=0'}}
                style={{
                    height: 250,
                    width: 159,
                    marginTop: 5,
                    //borderRadius:150
                }}/>
                </View>
                <View>
                    <Text>alasiri motors</Text>
                </View>
               

                
                
            </View>
        </View>
    );
}
export default PostCardItem;
