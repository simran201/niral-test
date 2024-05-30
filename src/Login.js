import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, FormErrorMessage } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const validateForm = () => {
        let formIsValid = true;
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Please enter your username';
            formIsValid = false;
        }

        if (!password) {
            newErrors.password = 'Please enter your password';
            formIsValid = false;
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleLogin = () => {
        if (validateForm()) {
            // Hardcoded credentials
            if (username === 'admin' && password === 'password') {
                localStorage.setItem('authenticated', true);
                navigate('/portfolio');
            } else {
                setErrors({ username: 'Invalid credentials', password: '' });
            }
        }
    };


    return (
        <Box
            maxW="500px"
            mx="auto"
            mt="20vh"
            p={38}
            borderWidth={1}
            borderRadius={10}
            boxShadow="lg"
            bg="#fff"
        >
            <Stack spacing={5}>
                <Box textAlign="center" fontWeight="bold" fontSize="25px">
                    Login to Continue!
                </Box>
                <FormControl isInvalid={errors.username} isRequired >
                    <FormLabel >Username</FormLabel>
                    <Input
                        placeholder="Enter your Username"
                        value={username}
                        className='form-contol'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormErrorMessage>{errors.username}</FormErrorMessage>

                </FormControl>
                <FormControl isInvalid={errors.password} isRequired>
                    <FormLabel >Password</FormLabel>

                    <Input
                        placeholder="Enter your Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>

                </FormControl>
                <Button onClick={handleLogin} colorScheme='teal' size="md">
                    Login
                </Button>
            </Stack>

        </Box>
    );
};

export default Login;
