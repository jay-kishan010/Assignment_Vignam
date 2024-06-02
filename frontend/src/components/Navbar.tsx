import { Avatar, Box, Button,Paper, Collapse, Drawer, Flex, Group, Text } from '@mantine/core';
import React from 'react';
import { FaPlus } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { useDisclosure } from '@mantine/hooks';
import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
const Navbar: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
   <>
   <Flex
      gap="20px" >
       <Avatar color="cyan" radius="xl" onClick={open}>AV</Avatar>
    <Text fw="900">AssignMent</Text>
    </Flex>
    <div style={{display:"flex", flexDirection:"column", width:"70px", gap:"30px", marginTop:"30px",zIndex:"100"}}>
   <Button> <IoHome /></Button>
   <Button> <IoMdContact /></Button>
   <Button> <FaChalkboardTeacher /></Button>
   <Button> <FaPlus /></Button>
   <Button> <IoMdCreate /></Button>

    </div>
   
   

{/* opening function of sidebar  */}
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Assignment"
        padding="md"
        size="xs"
        
       
      >
        {/* Sidebar content goes here */}
        <Group  >
        <div style={{display:"flex", flexDirection:"column", width:"140px", gap:"30px", marginTop:"30px"}}>
  <Paper style={{display:"flex",flexDirection:"row",gap:"40px"}} > <Button> <IoHome /> </Button> HOme</Paper>
     <Paper style={{display:"flex",flexDirection:"row",gap:"40px"}} > <Button> <IoMdContact /></Button>Contact</Paper>
     <Paper style={{display:"flex",flexDirection:"row",gap:"40px"}} > <Button> <FaChalkboardTeacher /></Button>Teach</Paper>
     <Paper style={{display:"flex",flexDirection:"row",gap:"40px"}} > <Button> <FaPlus /></Button>Add</Paper>
     <Paper style={{display:"flex",flexDirection:"row",gap:"40px"}} > <Button> <IoMdCreate /></Button>Create</Paper>

    </div>
        </Group>
      </Drawer>

     
    </>
   </>
  );
};

export default Navbar;