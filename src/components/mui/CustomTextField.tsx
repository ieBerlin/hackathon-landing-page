import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface LabelBaseProps {
  color?: string;
  text: string;
}

interface BaseProps {
  labelProps?: object;
  color?: string;
  placeholder: string;
  label?: string;
  name: string;
  type?: string;
  isError?: boolean;
  errorMessage?: string;
}

// Extend the props for both input and textarea elements
type InputProps = BaseProps &
  (
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>
  );

type LabelProps = LabelBaseProps & InputHTMLAttributes<HTMLLabelElement>;

const Label: FC<LabelProps> = ({ color, text, ...props }) => {
  return (
    <label
      className="block my-2 font-semibold text-sm"
      style={{ color }}
      {...props}
    >
      {text}
    </label>
  );
};

const CustomTextField: FC<InputProps> = ({
  labelProps = {},
  type = "text",
  placeholder,
  label,
  name,
  isError = false,
  errorMessage = "",
  ...props
}) => {
  const inputClasses = `py-3 px-4 block border-2 w-full rounded-[12px] text-sm focus:outline-none shadow-sm ${
    isError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
  }`;

  const readOnlyStyle = props.readOnly
    ? {
        borderColor: "#e5e7eb",
      }
    : undefined;

  return (
    <div>
      {label && <Label text={label} {...labelProps} />}
      {type === "textarea" ? (
        <textarea
          rows={3}
          className={inputClasses}
          name={name}
          style={readOnlyStyle}
          placeholder={placeholder}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={type}
          className={inputClasses}
          name={name}
          style={readOnlyStyle}
          placeholder={placeholder}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {isError && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default CustomTextField;
