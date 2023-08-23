export default function Grid() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="grid-root absolute inset-x-0 bottom-0 h-[70vh] w-full overflow-hidden">
        <div className="grid-lines h-[200%] w-full" />
      </div>

      <div className="grid-mask absolute inset-0" />
    </div>
  );
}
