import { useState } from "react";
import Button from "./Button";
import { filterableData } from "../data/FilterableData";
import { Image } from "./Image";
import { Text } from "./Text";
import SubcategoryDropdown from "./SubcategoryDropdown"; // Import the SubcategoryDropdown component

type SubCategories = {
    [key: string]: string[];
};

const subCategories: SubCategories = {
    'youtube Channel': ['Data Analyst', 'Productivity', 'Motivation','Notion','Excel','Finance','Design','Programming','Learn'],
    // add sub-categories for other categories...
};

const ImageFilter = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

    const buttonCaptions = [
        'all', 'youtube Channel', 'documentation', 'design Tools', 'frontend Tools', 'javascript Libraries', 'typography',
        'color', 'icons', 'html Templates', 'github Tools',
        'notion', 'tools Online', 'learning Online'
    ];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
        setActiveSubFilter('all'); // Reset sub-filter when main filter changes
    };

    const handleSubcategoryChange = (subFilter: string) => {
        setActiveSubFilter(subFilter);
    };

    const isDropdownHidden = (filter: string) => {
        const hiddenCategories = [
            'all', 'documentation', 'design Tools', 'frontend Tools', 'javascript Libraries', 'typography',
            'color', 'icons', 'html Templates', 'github Tools',
            'notion', 'tools Online', 'learning Online'
        ];
        return hiddenCategories.includes(filter);
    };

    return (
        <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5 bg-zinc-950 text-white">
            {!isDropdownHidden(activeFilter) && (
                <SubcategoryDropdown
                    subCategories={subCategories[activeFilter] || []}
                    onSelectSubcategory={handleSubcategoryChange}
                />
            )}
            <div className="flex lg:flex-row flex-col gap-12 mt-12">
            
                <div className="lg:w-1/5">
                  
                    <div className="w-full flex flex-col items-center gap-4 p-5 bg-zinc-900 rounded-lg">  
                                    
                        <div className="text-2xl font-bold mb-4">CATEGORIES</div>
                        <div>
                            <ul className="w-full">
                                {buttonCaptions.map((filter) => (
                                    <li key={filter} className="w-full mb-2 flex justify-center">
                                        <Button
                                            onClick={() => handleFilterClick(filter)}
                                            type="button"
                                            className={`w-full text-center py-2 px-5 rounded-lg focus:outline-none transition-colors
                                                ${activeFilter === filter ? "bg-zinc-900 font-bold text-white" : "text-gray-400"}
                                                hover:text-white`}
                                        >
                                            {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                   
                </div>
                
                <div className="lg:w-3/4">
                    <main className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8">
                    
                        {filterableData.map((item, index) => (
                            
                            <div
                                key={index}
                                className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-zinc-900 border border-zinc-900
                                    ${(activeFilter === 'all' || activeFilter === item.name) &&
                                    (activeSubFilter === 'all' || activeSubFilter === item.subCategory) ? 'block' : 'hidden'}`}
                            >
                        
                                <Image
                                    className="rounded-t-lg w-full h-[200px] overflow-hidden"
                                    image={item.src}
                                    alt={item.name}
                                    objectCover="object-fit"
                                    link={item.link} // Add the link prop here if available in your data
                                />
                                <div className="p-5">
                                    <Text as="h5" className="mb-2 text-2xl font-bold tracking-tight text-white">
                                        {item.title}
                                    </Text>
                                    <div className="max-h-40 overflow-y-auto">
                                        <Text as="p" className="font-normal text-gray-400">
                                            {item.text}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </section>
    );
};

export default ImageFilter;
