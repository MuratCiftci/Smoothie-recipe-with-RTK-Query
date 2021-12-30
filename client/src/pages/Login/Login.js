import { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  Divider,
  Center,
  Box,
  useToast,
  FormControl,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/features/auth/authApi";
import { useAuth } from "../../hooks/useAuth";
function PasswordInput({ name, onChange }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        name={name}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export const Login = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const toast = useToast();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formState).unwrap();
      // Being that the result is handled in extraReducers in authSlice,
      // we know that we're authenticated after this, so the user
      // and token will be present in the store
      navigate("/");
    } catch (err) {
      toast({
        status: "error",
        title: "Error",
        description: "Invalid username or password",
        isClosable: true,
      });
    }
  };
  console.log(formState);
  return (
    <Center width="100%">
      <Box
        p={8}
        mt={10}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing="4">
            <FormControl isRequired>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <PasswordInput onChange={handleChange} name="password" />
              </InputGroup>
            </FormControl>
            <Button
              isFullWidth
              color="white"
              type="submit"
              bg="cyan.600"
              _hover={{ bg: "cyan.800" }}
              isLoading={isLoading}
            >
              Login
            </Button>
            <Divider />
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
