import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {

  const [modalIsVisible, setModalVisibility] = useState(false);
  function hideModalHandler() {
    setModalVisibility(false);
  }

  function showModalHandler() {
    setModalVisibility(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting = {modalIsVisible} onStopPosting={hideModalHandler}></PostsList>
      </main>
    </>
  );
}

export default App;
