import "./styles/index.scss";

//
import Header from "./components/Header/Header";
import MainRouter from "./routes/mainRouter";import { useEffect } from "react";
import useContentStore from "./store/Content/contentStore";
import { useLazyQuery } from "@apollo/client";
import { getContents } from "./api";
function App() {
  const [getContent, { loading: contentLoading, error: contentError, data: content }] = useLazyQuery(getContents);
  const { setContent } = useContentStore()
  
  useEffect(() => {
    getContent()
  }, [])
  
  useEffect(() => {
    if (content?.aatralPages?.data) {
      setContent(content?.aatralPages?.data)
    }
  }, [content]);

  return (
      <div className="App">
        {window.location.pathname !== '/admin-login' && window.location.pathname !== '/admin-table' &&
        <Header />}
        <MainRouter />
      </div>
  );
}

export default App;