const Category = ({ category }) => {
  const { logo, category_name, availability } = category;

  return (
    <div className="container mx-auto bg-purple-100 p-8">
      <img src={logo} alt="" />
      <h3 className="text-xl font-semibold pt-5 pb-2">{category_name}</h3>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
