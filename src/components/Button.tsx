interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className=" bg-primary hover:bg-primary_hover text-white rounded-lg px-6 py-2.5 mt-20 text-sm">
      {text}
    </button>
  );
}

export default Button;
