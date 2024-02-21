import { useState } from "react";

const Demo = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mt-16 p-4 bg-red-300 h-96 w-96">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem
      deleniti facere maiores nesciunt veniam autem, est nobis officiis
      voluptates minima nam porro? Eveniet repellendus at obcaecati adipisci
      repellat! Voluptates!
      <button
        className=" bg-violet-500"
        onClick={() => setIsVisible(!isVisible)}
      >
        toggle bar
      </button>
      <div
        className={`mt-5 bg-violet-900 h-44 w-44 transition duration-300 ${
          isVisible ? "translate-x-44" : "-translate-x-44"
        }`}
      >
        {isVisible ? "hello this is me" : ""}
      </div>
    </div>
  );
};
export default Demo;
