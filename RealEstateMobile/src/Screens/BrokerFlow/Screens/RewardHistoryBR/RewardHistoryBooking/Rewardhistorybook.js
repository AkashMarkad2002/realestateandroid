import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Rewardhistorybookchild from './Rewardhistorybookchild';

const Rewardhistorybook = () => {
  const visitdata = [
    {
      id: 1,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      feild3: 'Attendee Name',
      // status: 'REWARDED',
      feild4: 'Unit Number',
      feild5: 'Request Date',
      // field7: 'status',
      feild6: 'Rewarded Amount',
      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
    {
      id: 2,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      feild3: 'Attendee Name',
      feild4: 'Unit Number',
      feild5: 'Request Date',
      feild6: 'Rewarded Amount',
      // field7: 'status',
      // status: 'REWARDED',
      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
    {
      id: 3,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      feild3: 'Attendee Name',
      feild4: 'Unit Number',
      feild5: 'Request Date',
      // field7: 'status',
      // status: 'REWARDED',
      feild6: 'Rewarded Amount',
      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
    {
      id: 4,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      feild3: 'Attendee Name',
      // field7: 'status',
      // status: 'REWARDED',
      feild4: 'Unit Number',
      feild5: 'Request Date',
      feild6: 'Rewarded Amount',
      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
    {
      id: 5,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      // field7: 'status',

      feild3: 'Attendee Name',
      feild4: 'Unit Number',
      feild5: 'Request Date',
      feild6: 'Rewarded Amount',
      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
    {
      id: 6,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      feild3: 'Attendee Name',
      // field7: 'status',
      // status: 'REWARDED',
      feild4: 'Unit Number',
      feild5: 'Request Date',
      feild6: 'Rewarded Amount',
      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
    {
      id: 7,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      feild3: 'Attendee Name',
      // field7: 'status',
      // status: 'REWARDED',
      feild4: 'Unit Number',
      feild5: 'Request Date',
      feild6: 'Rewarded Amount',
      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
    {
      id: 8,
      img: require('../../../../../Assets/Images/Property.png'),
      propertyName: 'Experion The Westerlies',
      location: 'St. 163, Sector-108 Gurgaon',
      feild1: 'Developer Name',
      feild2: 'Client Name',
      feild3: 'Attendee Name',
      feild4: 'Unit Number',
      feild4: 'Request Date',
      feild5: 'Rewarded Amount',
      // field7: 'status',

      DeveloperName: 'Rajan Pathak Kumar ',
      ClientName: 'Abhinav Pathak Kumar ',
      Attendee: 'Abhinav Pathak Kumar',
      UnitNumber: '12A',
      RequestDate: '12-04-2020',
      Rewardedamount: '₹400 ',
      // Status: 'Pending',
    },
  ];
  return (
    <View style={{marginBottom: '60%'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={visitdata}
        renderItem={({item}) => {
          return (
            <Rewardhistorybookchild
              Img={item.img}
              PropertyN={item.propertyName}
              Loc={item.location}
              f1={item.feild1}
              f2={item.feild2}
              f3={item.feild3}
              f4={item.feild4}
              f5={item.feild5}
              f6={item.feild6}
              f7={item.field7}
              UN={item.UnitNumber}
              DevelopN={item.DeveloperName}
              ClientN={item.ClientName}
              RequestD={item.RequestDate}
              RewardAmt={item.Rewardedamount}
              Att={item.Attendee}
              stat={item.status}
            />
          );
        }}
      />
    </View>
  );
};

export default Rewardhistorybook;

const styles = StyleSheet.create({});