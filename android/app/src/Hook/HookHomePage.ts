/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
const {useState} = require('react');

interface Student {
  id: string | number;
  name: string;
  avatar: string;
  age: number;
}
const hookHomePage = () => {
  const students: Student[] = [
    {
      id: '01',
      name: 'Phan Thị Thu Hương',
      age: 21,
      avatar:
        'https://img.docbao.vn/images/fullsize/2018/03/08/co-gai-9.jpg',
    },
    {
      id: '02',
      name: 'Nguyễn Thị Út Viên',
      age: 20,
      avatar:
        'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1.jpg',
    },
    {
      id: '03',
      name: 'Lê Trần Anh Minh',
      age: 20,
      avatar:
        'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh-viet-nam-mac-vay-hoa.jpg',
    },
    {
      id: '04',
      name: 'Võ Thị Thúy Hà',
      age: 20,
      avatar:
        'https://1.bp.blogspot.com/-ydS25hMYkRc/WLYeGBpYpjI/AAAAAAAAADA/V7N5F2l7vQoNh_th5N--UPVKScdbjEj4gCLcB/s1600/G%2B%25281%2529.jpg',
    },
    {
      id: '05',
      name: 'Đặng Mùi Nái',
      age: 20,
      avatar:
        'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-2.jpg',
    },
    {
      id: '06',
      name: 'Phan Trần Thị Anh Thư',
      age: 20,
      avatar:
        'https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-gai-xinh-viet-nam-dep-nhat-the-gioi.jpg',
    },
  ];
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const openModal = (student: Student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return {
    openModal,
    students,
    selectedStudent,
    modalVisible,
    setSelectedStudent,
    setModalVisible,
    searchQuery,
    setSearchQuery,
    filteredStudents,
  };
};
export default hookHomePage;
