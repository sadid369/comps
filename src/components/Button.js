import className from "classnames";

// const finalClassName = className("px-1.5", {
//   "bg-blue-500": true,
//   "text-yellow-500": false,
// });
// console.log(finalClassName);
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  console.log(rest);
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border ",
    {
      "text-white border-blue-500 bg-blue-500": primary,
      "text-white border-gray-500 bg-gray-900": secondary,
      "text-white border-green-500 bg-green-500": success,
      "text-white border-yellow-500 bg-yellow-400": warning,
      "text-white border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary ,secondary ,success ,warning ,danger  can be true"
      );
    }
  },
};
export default Button;
