"use client";
export default function homePage() {
  const handleClick = async () => {
    const res = await fetch("/api/bum");
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div>This is the / page</div>
      {/* testing the api call */}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Test API
      </button>
    </div>
  );
}
