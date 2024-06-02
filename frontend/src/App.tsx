import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import { Drawer, Input, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './App.css';
// import { TfiWrite } from "react-icons/tfi";
// import { AppShell, Navbar, Text, Burger, 
// import {  } from '@mantine/core';
import { AppShell, Text, Burger,  useMantineTheme, Flex, Avatar, Button, Title, Divider, Paper } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { Group, Collapse, Box } from '@mantine/core';
import { FaPager } from "react-icons/fa";
// import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { Grid, Skeleton, Container } from '@mantine/core';
import Navbar from './components/Navbar';
import { FaChevronLeft } from "react-icons/fa";
const child = <Skeleton height={140} radius="md" animate={false} />;
function App() {
  // const [ { toggle }] = useDisclosure();
  const theme = useMantineTheme();
const [opened, { open, close }] = useDisclosure(false);
const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      console.log(responseData.message);
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };


  return (
    <AppShell
    navbar={{
      width: 300,
      breakpoint: 'sm',
      collapsed: { mobile: !opened },
    }}
    padding="md"
  >
 

    <AppShell.Navbar p="md">
    
    <Navbar/>

    </AppShell.Navbar>

    <AppShell.Main>
<div style={{display:"flex", flexDirection:"row",gap:"20px"}}>
<FaChevronLeft />
    <Text fw={600}>Chapter Name</Text>
</div>
   
    <Divider my="md" />
      
       <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        {/* <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col> */}
        
      </Grid>

      <>
      <Modal opened={opened} onClose={close} title="Add Content" centered>
     
     
    <Paper shadow="xs" p="xl">
    <input type="file" onChange={handleFileChange} />
     
      <Text>
     
      </Text>
    </Paper>
    <Paper shadow="xs" p="xl">
     
    <Input placeholder="Type description" />
    </Paper>

     
    <div style={{display:"flex", margin:"5px",justifyContent:"end"}}>
      <Button>Cancel</Button><Button variant="light">Add Content</Button>
    </div>
      </Modal>

      <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
      <div onClick={open}  style={{width:"300px", height:"300px", backgroundColor:"#FFFAFA"}}>
      <div style={{alignItems:'center',margin:"30px",padding:"50px" }}>
      <FaPager />
      <Text size='lg'>Content Not Added</Text>
      <Button  onClick={handleFileUpload}>Add Content</Button>
      </div>
      </div>
      </div>
    </>
    </Container>

    </AppShell.Main>
  </AppShell>

  );
}

export default App;
