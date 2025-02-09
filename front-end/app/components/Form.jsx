import Link from "next/link";
export default function Form({ type, post, setPost, submit, handleSubmit }) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} and Share</p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => {
              setPost({
                ...post,
                prompt: e.target.value,
              });
            }}
            placeholder="Input here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">(#production,#idea)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => {
              setPost({
                ...post,
                tag: e.target.value,
              });
            }}
            placeholder="Input Tag here"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancle
          </Link>
          <button
            type="submit"
            disabled={submit}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submit ? "Submitting..." : `${type} Prompt`}
          </button>
        </div>
      </form>
    </section>
  );
}
