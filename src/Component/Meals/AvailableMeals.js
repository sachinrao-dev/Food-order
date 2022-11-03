import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const DummyMeals = [
    {
    id: 'm1',
    name:'Sushi',
    description:'Finest fish and veggies' ,
    price: 22.89
},
{
    id: 'm2',
    name:'Schnitzel',
    description:'A german Specialty' ,
    price: 16.5
},{
    id: 'm3',
    name:'Barbecue Burger',
    description:'American raw Meaty' ,
    price: 12.78
},{
    id: 'm4',
    name:'Green bowl',
    description:'Healthy..... and green .....' ,
    price: 22.89
}
]


const AvailableMeals = () =>{
    const mealList = DummyMeals.map(meal=><MealItem id = {meal.id}  name= {meal.name} description= {meal.description} price={meal.price}/>)
    return(<section>
        <ul>
            <Card>
            {mealList}
            </Card>
        </ul>
    </section>)

}
export default AvailableMeals;