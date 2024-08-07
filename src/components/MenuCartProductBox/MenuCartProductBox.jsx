import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentLoggedUser } from '../../atoms/currentLoggedUser';

import addedProductToGlobalCartMenu from '../../atoms/addedProductToGlobalCartMenu';
import useRemoveProductItemFromUserCart from '../../hooks/useRemoveProductItemFromUserCart';
import Swal from 'sweetalert2';

import { AiOutlineClose } from 'react-icons/ai';

MenuCartProductBox.propTypes = {
  product: PropTypes.object,
};

function MenuCartProductBox({ product }) {
  const currentUser = useRecoilValue(currentLoggedUser);

  const setAddedProductToGlobalCart = useSetRecoilState(
    addedProductToGlobalCartMenu,
  );

  const itemTotalPrice = product?.discount
    ? ((product?.price - product?.discount) * product?.quantity).toFixed(2)
    : (product?.price * product?.quantity).toFixed(2);

  const handleRemoveProductItemFromUserCart =
    useRemoveProductItemFromUserCart();

  const handleRemoveProductFromCartMenu = () => {
    if (currentUser?.email) {
      handleRemoveProductItemFromUserCart(product.title, product?.id);
    } else {
      Swal.fire({
        title: `Are you sure you want to delete this product ${product.title} from the global cart ?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          setAddedProductToGlobalCart((prevProducts) =>
            prevProducts.filter((item) => item.id !== product?.id),
          );

          Swal.fire({
            title: 'Deleted!',
            text: 'The product has been deleted successfully from the global cart.',
            icon: 'success',
          });
        }
      });
    }
  };

  return (
    <div className="relative flex h-[100px] w-full overflow-hidden">
      <Link to={`/product/${product?.id}`}>
        <img
          className="mr-[15px] h-full w-[75px] object-contain"
          src={product?.image}
          alt={product?.image}
        />
      </Link>

      <div className="text-primaryColor">
        <h3
          className="mb-2.5 text-left text-sm capitalize leading-5
          lg:text-base lg:leading-[1.4]"
        >
          <Link
            to={`/product/${product?.id}`}
            className="hover:text-thirdColor"
            href="#"
          >
            {product?.title.slice(0, 15)}...
          </Link>
        </h3>

        <div className="text-left text-sm leading-4">
          <span className="me-4">{product?.quantity}x</span>

          <span>€{product?.price}</span>

          <p className="mt-3 font-bold">Total price €{itemTotalPrice}</p>
        </div>
      </div>

      <div
        className="absolute right-0 top-0 flex h-[16px]
        w-[16px] cursor-pointer items-center justify-center
        text-base"
        onClick={handleRemoveProductFromCartMenu}
      >
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default MenuCartProductBox;
