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
      "text-white border-blue-600 bg-blue-500": primary,
      "text-white border-gray-600 bg-gray-900": secondary,
      "text-white border-green-600 bg-green-500": success,
      "text-white border-yellow-600 bg-yellow-400": warning,
      "text-white border-red-600 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-600": outline && primary,
      "text-gray-600": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-600": outline && warning,
      "text-red-600": outline && danger,
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
