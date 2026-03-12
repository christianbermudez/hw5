const bodyNodes = () => {
  const nodes = document.body.childNodes;
  nodes.forEach(node => {
    console.log(node);
  });
}

bodyNodes();
