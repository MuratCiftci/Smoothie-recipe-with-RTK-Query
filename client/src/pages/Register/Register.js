import { useState } from "react";
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

import { useRegisterMutation } from "../../app/features/auth/authApi";
import ErrorMessage from "../../components/Error";

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

export const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [register, { isLoading }] = useRegisterMutation();
  const [errors, setErrors] =useState([]);
  console.log(errors);
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formState).unwrap();
      navigate("/login");
    } catch (err) {
      setErrors(err.data.errors)
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
          {errors && errors.map(e => (
            <ErrorMessage message={e.msg} />
          ))}
          <VStack spacing={4}>
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
                <Input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
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
              Register
            </Button>
            <Divider />
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default Register;
