import Footer from "./Footer";

export default function FAQ() {


    return (
        <div>
            <div className="flex flex-col w-8/12 mx-auto items-center my-10">
                <h1 className="text-3xl">FAQ</h1>
                <div className="flex flex-col justify-center items-start w-full gap-8">
                    <div >
                        <p className="text-2xl">Where does your cost data come from?</p>
                        <p>
                            Currently it is an estimated price based on average costs of aggregated supermarket data. Since grocery prices do range (sometimes considerably) from region to region and store to store, we hope to have prices based on user location or an option to enter your own prices in the future.

                        </p>
                    </div>
                    <div>
                        <p className="text-2xl">How are the different diets defined?</p>
                        <p>
                            Gluten Free: Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).
                            Ketogenic: The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.
                            Vegetarian: No ingredients may contain meat or meat by-products, such as bones or gelatin.
                            Lacto-Vegetarian: All ingredients must be vegetarian and none of the ingredients can be or contain egg.
                            Ovo-Vegetarian: All ingredients must be vegetarian and none of the ingredients can be or contain dairy.
                            Vegan: No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.
                            Pescetarian: Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.
                            Paleo: Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.
                            Primal: Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.
                            Whole30: Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.

                        </p>

                    </div>
                    <div>
                        <p className="text-2xl">I want to make a "What's in my fridge?". How do I do this?</p>
                        <p>
                        Yes, you can! Simply enter the ingredients you have in your fridge into our search feature, and we'll show you recipes that you can make with those ingredients. Our smart recipe finder matches your available ingredients with delicious recipes, helping you make the most of what you already have.
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl"> How can I search recipes by the equipment used?</p>
                        <p>  Yes, you can! Simply select the equipment you have, such as a blender, oven, or slow cooker, and we'll show you recipes that specifically use those tools. This way, you can easily find recipes that match the equipment you have at home</p>
                    </div>


                </div>


            </div>
            <Footer/>

        </div>
    );
}