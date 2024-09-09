import Footer from "./Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ() {


    return (
        <div className="overflow-hidden dark:bg-neutral-900 relative min-h-screen ">
            <div className="flex flex-col w-10/12 md:w-8/12 lg:w-7/12 mx-auto items-center my-10 text-gray-700 dark:text-gray-200 pb-12 font-serif mb-40 md:mb-52 lg:mb-80">
                <h1 className="text-3xl mb-8">FAQ</h1>




                <div className="flex flex-col justify-center items-start w-full ">

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger> Is it free to use ? </AccordionTrigger>
                            <AccordionContent>
                                Yes, our service is completely free to use! You can search for recipes, input your ingredients, and find meals you can make without any cost.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger> Where does your cost data come from ?</AccordionTrigger>
                            <AccordionContent>
                                Currently it is an estimated price based on average costs of aggregated supermarket data. Since grocery prices do range (sometimes considerably) from region to region and store to store, we hope to have prices based on user location or an option to enter your own prices in the future.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How are the different diets defined ?</AccordionTrigger>
                            <AccordionContent>
                                <span className="font-semibold">Gluten Free: </span>  Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated). <br />
                                <span className="font-semibold">Ketogenic: </span>
                                The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. <br />

                                <span className="font-semibold"> Vegetarian: </span>
                                No ingredients may contain meat or meat by-products, such as bones or gelatin. <br />
                                <span className="font-semibold">Lacto-Vegetarian: </span>
                                All ingredients must be vegetarian and none of the ingredients can be or contain egg.
                                <br />
                                <span className="font-semibold"> Ovo-Vegetarian:  </span>
                                All ingredients must be vegetarian and none of the ingredients can be or contain dairy. <br />
                                <span className="font-semibold">  Vegan:</span>
                                No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.
                                Pescetarian: Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.
                                Paleo: Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.
                                Primal: Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.
                                Whole30: Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>I want to make a "What's in my fridge?". How do I do this ?</AccordionTrigger>
                            <AccordionContent>
                            Yes, you can! Simply enter the ingredients you have in your fridge into our search feature, and we'll show you recipes that you can make with those ingredients. Our smart recipe finder matches your available ingredients with delicious recipes, helping you make the most of what you already have.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How can I search recipes by the equipment used ?</AccordionTrigger>
                            <AccordionContent>
                            Yes, you can! Simply select the equipment you have, such as a blender, oven, or slow cooker, and we'll show you recipes that specifically use those tools. This way, you can easily find recipes that match the equipment you have at home
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>



                </div>


            </div>
            <div className="fixed bottom-0">

                  <Footer />
            </div>
          

        </div>
    );
}