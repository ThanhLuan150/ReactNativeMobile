/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// import React, {FC} from 'react';
// import {View, Text, SectionList, ScrollView} from 'react-native';
// type Student = {
//   id: number;
//   name: string;
//   age: number;
// };
// const ShowData: FC = () => {
//   const students: Student[] = [
//     {
//       id: 1,
//       name: 'Suu',
//       age: 26,
//     },
//     {
//       id: 2,
//       name: 'Tien',
//       age: 24,
//     },
//     {
//       id: 3,
//       name: 'Tu',
//       age: 19,
//     },
//     {
//       id: 4,
//       name: 'Huong',
//       age: 20,
//     },
//     {
//       id: 5,
//       name: 'Thien',
//       age: 22,
//     },
//     {
//       id: 6,
//       name: 'Sen',
//       age: 21,
//     },
//     {
//       id: 7,
//       name: 'Quang',
//       age: 24,
//     },
//     {
//       id: 8,
//       name: 'Luan',
//       age: 23,
//     },
//   ];

//   const groupAgeStudents = (students: Student[], age: number): Student[] => {
//     return students.filter(student => student.age === age);
//   };

//   const group23Students: Student[] = groupAgeStudents(students, 23);
//   const group24Students: Student[] = groupAgeStudents(students, 24);
//   const group25Students: Student[] = groupAgeStudents(students, 25);

//   const sections = [
//     {title: 'Age 23', data: group23Students},
//     {title: 'Age 24', data: group24Students},
//     {title: 'Age 25', data: group25Students},
//   ];

//   return (
//     <ScrollView>
//       <SectionList<Student>
//         sections={sections}
//         keyExtractor={(item, index) => item.id.toString()}
//         renderItem={({item}) => (
//           <View>
//             <Text>Name: {item.name}</Text>
//             <Text>Tuổi: {item.age}</Text>
//           </View>
//         )}
//         renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
//       />
//     </ScrollView>
//   );
// };

// export default ShowData;
