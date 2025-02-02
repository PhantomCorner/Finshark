interface PageProps {
  params: { postId: string };
}

export default function Page({ params }: PageProps) {
  const { postId } = params;

  return (
    <div>
      <h1>My Post:{postId}</h1>
    </div>
  );
}
