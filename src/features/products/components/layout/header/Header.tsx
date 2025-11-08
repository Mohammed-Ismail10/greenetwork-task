"use client";
import { Input } from "@/components/ui/input";
interface HeaderProps {
  onSearch: (query: string) => void;
}
const Header = ({ onSearch }: HeaderProps) => {
  return (
    <section>
      <div className="rounded border p-4 flex flex-col gap-4">
        <h2>Search product:</h2>
        <Input
          type="search"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Header;
