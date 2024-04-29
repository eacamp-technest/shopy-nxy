// import {TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import {SvgImage} from 'components/SvgImage';
// import {VectorResources} from 'assets/VectorResources';

// export interface IRadioButton {
//   checked?: boolean;
//   onPress?: () => void;
// }

// export const RadioButton: React.FC<IRadioButton> = ({}) => {
//   const [checkedState, setCheckedState] = useState<boolean>(false);
//   const getChangedIcon = (check: boolean) => {
//     setCheckedState(!check);
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         activeOpacity={0.5}
//         onPress={() => {
//           getChangedIcon(checkedState);
//         }}>
//         <SvgImage
//           source={
//             checkedState
//               ? VectorResources.radioTrue
//               : VectorResources.radioFalseDefault
//           }
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };
