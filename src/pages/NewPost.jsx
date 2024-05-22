import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      toast({
        title: "Error",
        description: "Title and content cannot be empty.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    addPost({ title, content });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Create a New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewPost;