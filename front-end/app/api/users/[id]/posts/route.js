import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, context) => {
  const { params } = context;
  try {
    await connectToDb();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
