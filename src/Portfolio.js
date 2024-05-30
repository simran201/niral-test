import React, { useEffect, useState } from 'react';
import { Box, Button, Text, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from JSONPlaceholder
    fetch('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/login');
  };

  return (
    <Box maxW="lg" mx="auto" mt={10}>
      <Stack spacing={3}>
        <Text>Welcome to your portfolio</Text>
        <Button onClick={handleLogout}>Logout</Button>
        <Box>
          {posts.slice(0, 5).map(post => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px">
              <Text mt={4}>{post.title}</Text>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Portfolio;
