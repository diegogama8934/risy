

export default function FoodPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
