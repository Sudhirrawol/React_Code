const heading = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "iam an h1 tag"),React.createElement('h2',{},'iam an h2 tah')]
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
