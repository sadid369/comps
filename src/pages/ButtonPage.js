import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./../components/Button";
function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <div>
        <Button
          onClick={handleClick}
          onMouseLeave={handleClick}
          secondary
          rounded
          className="mb-5"
        >
          <GoBell />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>Hide Add</Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          Deal!!
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
