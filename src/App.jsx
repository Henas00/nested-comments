import React, { useEffect, useState } from "react";
import CommentList from "./components/CommentList";

const App = ({ comments }) => {
  const [formattedComments, setFormattedComments] = useState()

  useEffect(() => {
    function searchForParent(possibleParents, possibleChild) {
      let found = false;
      for (let i = 0; i < possibleParents.length; i++) {

        if (possibleParents[i].id === possibleChild.parentId) {
          found = true
          possibleParents[i].children ? possibleParents[i].children.push(possibleChild) : possibleParents[i].children = [possibleChild]
          possibleParents[i].count = possibleParents[i].children.length
          possibleChild.level = possibleParents[i].level + 1
          return true
        } else if (possibleParents[i].children) found = searchForParent(possibleParents[i].children, possibleChild)
      }
      return found;
    }
    const nested = comments.reduce((initial, value, index, original) => {
      if (value.parentId === null) {
        value.root = true;
        initial.root.push(value)
        value.level = 0;
      }
      else {
        let parentFound = searchForParent(initial.root, value)
        !parentFound && initial.nested.push(value)
      }
      return index < original.length - 1 ? initial : initial.root
    }, { root: [], nested: [] })
    setFormattedComments(nested)
  }, [comments])
  return <CommentList comments={formattedComments} />;
};

export default App;
