import Iframe from "react-iframe";
import Header from "./Header";
import Home from "./Home";
import Examples from "./Examples";
import Documentation from "./Documentation";
import Source from "./Source";
import React, { useState } from "react";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="examples" element={<Examples />} />
            <Route path="documentation" element={<Documentation />} />
            <Route path="*" element={<Source />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
/* {notebookUrl && <Iframe url={notebookUrl} width="100%" height="500px" />} */
// <iframe src="/sdd.html" width="100%" height="500"></iframe>
/* <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })} */
