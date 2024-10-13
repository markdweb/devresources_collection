import { useState } from "react";

type SubcategoryDropdownProps = {
    subCategories: string[];
    onSelectSubcategory: (subFilter: string) => void;
};

const SubcategoryDropdown: React.FC<SubcategoryDropdownProps> = ({ subCategories, onSelectSubcategory }) => {
    const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

    const handleSubFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSubFilter = event.target.value;
        setActiveSubFilter(selectedSubFilter);
        onSelectSubcategory(selectedSubFilter);
    };

    return (
        <div className="absolute top-12 right-12 mr-4 mt-10 z-10">
            <div className="text-s font-bold mb-1">SECONDARY CATEGORY</div>
            <select
                value={activeSubFilter}
                onChange={handleSubFilterChange}
                className="w-full py-2 px-4 rounded-lg bg-zinc-900 text-white focus:outline-none border border-white">
                <option value="all">All</option>
                {subCategories.map((subFilter: string) => (
                    <option key={subFilter} value={subFilter}>{subFilter}</option>
                ))}
            </select>
        </div>
    );
};

export default SubcategoryDropdown;
