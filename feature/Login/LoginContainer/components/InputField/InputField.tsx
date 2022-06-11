import { Motion } from "ui/Motion";
import { InputGroup, InputIcon, Input } from "./InputField.styled";

export const InputField = ({
  icon,
  type,
  value,
  name,
  onChange,
  placeholder,
}) => {
  let Icon = icon;

  return (
    <Motion>
      <InputGroup>
        <InputIcon>
          <Icon />
        </InputIcon>
        <Input
          value={value}
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      </InputGroup>
    </Motion>
  );
};
