export default function PostDetails() {
  const { id } = useParams();

  return (
    <div className="post-details">
      <h2>Edit Post</h2>
      <input defaultValue={`Post ${id}`} />
      <button className="button">Save</button>
    </div>
  );
}
