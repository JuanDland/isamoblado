import CategoryButton from '@/components/CategoryButton';
import categories from '../data/categories.json';
const Categories = () => {

    return (
        <div className="w-full my-16">
            <div className="flex flex-wrap md:flex-nowrap justify-center my-10">
                {
                    categories.map((cat, index) => (
                        <CategoryButton
                            key={index}
                            imageUrl={cat.imageUrl}
                            category={cat}
                        />
                    ))
                }
            </div>
            <p className='text-center max-w-80 sm:max-w-full place-self-center '>Encuentra el mueble ideal para cada zona de tu hogar</p>
        </div>
    )
}

export default Categories;