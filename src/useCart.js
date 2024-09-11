import {ref,computed} from 'vue';
import { useToast } from 'vue-toast-notification';

const $toast = useToast();

const cart = ref([]);
export function useCart(){

    const addToCart = (product) => {
        const item = cart.value.find(item => item.id === product.id);
        if(item){
            $toast.info("Item was already add to card! ");
        }else{
            console.log(cart.value);
            cart.value.push({...product, quantity: 1});
            $toast.success("Item was add to your cart!");
        }
    }

    const removeFromCart = (productID) => {
        const itemIndex = cart.value.findIndex(item => item.id === productID);
        if(itemIndex !== -1){
            cart.value.splice(itemIndex, 1);
            $toast.error("Item was removed from your cart!");
        }else{
            $toast.error("Item not found in the cart!");
        }
    }
    const countProduct = computed(()=>{
        return cart.value.length;
    })

    const getTotalPrice = computed(()=>{
        return cart.value.reduce((total,item)=> total + item.price * item.quantity  , 0);
    })

     // New function to compute the subtotal for each product
     const getSubtotal = (productID) => {
        const item = cart.value.find(item => item.id === productID);
        if (item) {
            return item.price * item.quantity;
        }
        return 0;
    }
    return{
        cart,
        removeFromCart,
        addToCart,
        countProduct,
        getTotalPrice,
        getSubtotal 
    }
}