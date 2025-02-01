// button component accept a prop called onClick
"use client";
interface ButtonProps {
  onClick: () => void;
}

const Button = () => {
  return (
    <button
      onClick={async () => {
        const res = await fetch("/api/testing/1234");
        const data = await res.json();
        console.log(data);
      }}
    >
      Test API
    </button>
  );
};
