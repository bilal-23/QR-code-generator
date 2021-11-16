export default function Spinner() {
  return (
    <div className="flex relative top-40 w-full justify-center items-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-red-200 border-dashed rounded-full animate-spin"
      ></div>
    </div>
  );
}
