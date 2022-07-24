import { useEffect } from "react";

function useDocumentTitle() {
  useEffect(() => {
    document.title = "Welcome to the home page!";
  }, []);
}

export default useDocumentTitle;
