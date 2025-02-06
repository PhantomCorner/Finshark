import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  data,
  handleDelete,
  handleEdit,
  handleTagClick,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <p>{desc}</p>
      <div className="mt-16 prompt_layout">
        {data.map((item) => (
          <PromptCard
            key={item._id}
            content={item}
            handleDelete={() => handleDelete(item)}
            handleEdit={() => handleEdit(item)}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
