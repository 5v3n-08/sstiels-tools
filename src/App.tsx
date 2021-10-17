import React from "react";
import Clock from "react-live-clock";
import "bootstrap/dist/css/bootstrap.css";

interface IProps {}
export const App: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  const params = getQueryParams(window.location.search);
  const color = params["color"] ? `#${params["color"]}` : "#040c23";
  const font = params["font"] ? `#${params["font"]}` : "#fff";
  const sizeTime = parseInt(params["sizeTime"] ?? "52");
  const sizeDate = parseInt(params["sizeDate"] ?? "26");

  console.log(params);
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: color }}>
      <div
        className="d-flex justify-content-center align-items-center h-100"
        style={{ flexDirection: "column" }}
      >
        <div style={{ color: font, fontSize: sizeTime }}>
          <Clock format={"HH:mm"} ticking={true} />
        </div>
        <div style={{ color: font, fontSize: sizeDate }}>
          <Clock format={"D.M.y"} ticking={true} />
        </div>
      </div>
    </div>
  );
};

const getQueryParams = (qs: string) => {
  qs = qs.split("+").join(" ");

  const params: { [key: string]: string } = {};
  let tokens: RegExpExecArray | null = null;
  const re = /[?&]?([^=]+)=([^&]*)/g;

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
};
export default App;
