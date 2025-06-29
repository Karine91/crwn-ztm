import CategoryItem from "@/components/category-item/CategoryItem";
import "./directory.styles.scss";

type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

type DirectoryProps = {
  categories: Category[];
};

const Directory = ({ categories }: DirectoryProps) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Directory;
