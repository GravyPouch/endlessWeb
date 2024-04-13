export function Tweet({ time, title, content }) {
  const timestamp = time; // Unix timestamp
  const dateObj = new Date(timestamp);
  return (
    <div className=" border-2 p-2">
      <div>
        <h1 className=" text-2xl">{title}</h1>

        <h1>{dateObj.toLocaleString()}</h1>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}
