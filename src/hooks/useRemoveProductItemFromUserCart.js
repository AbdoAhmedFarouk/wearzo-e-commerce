import Swal from 'sweetalert2';
import useUserCart from './useUserCart';

function useRemoveProductItemFromUserCart() {
  const { setLoggedUsers, currentUser } = useUserCart();

  const handleRemoveProductItemFromUserCart = (productTitle, productId) => {
    Swal.fire({
      title: `Are you sure you want to delete this product ${productTitle} from your cart ?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoggedUsers((users) => {
          return users.map((user) =>
            user.email === currentUser?.email
              ? {
                  ...user,
                  cart: user.cart.filter((item) => item.id !== productId),
                }
              : user,
          );
        });

        Swal.fire({
          title: 'Deleted!',
          text: 'The product has been deleted successfully from your cart.',
          icon: 'success',
        });
      }
    });
  };

  return handleRemoveProductItemFromUserCart;
}

export default useRemoveProductItemFromUserCart;
