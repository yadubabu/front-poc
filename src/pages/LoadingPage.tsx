import ClipLoader from "react-spinners/ClipLoader";

const LodingPage = () => {
  return (
    <div className="text-center spinner" style={{ position: "relative" }}>
      <ClipLoader
        color="black"
        loading={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LodingPage;
