import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";
import { useState } from "react";
import { ColorModeScript } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
  const [posts, setPosts] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <ColorModeScript initialColorMode="light" />
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} />} />
        <Route path="/new-post" element={<NewPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;