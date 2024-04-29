import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { PropTypes } from 'prop-types';

import clickedProduct from '../../atoms/product';
import useAddProductsToUserCart from '../../hooks/useAddProductsToUserCart';
import useIncrementProductQuantity from '../../hooks/useIncrementProductQuantity';
import useDecrementProductQuantity from '../../hooks/useDecrementProductQuantity';
import useCheckLoggedUser from '../../hooks/useCheckLoggedUser';
import useInputValueHandler from '../../hooks/useInputValueHandler';
import useAddProductsToUserWishList from '../../hooks/useAddProductsToUserWishlist';
import Swal from 'sweetalert2';

import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import SiteInfoRules from '../../components/SiteInfoRules/SiteInfoRules';
import ProductDiscount from '../../components/ProductDiscount/ProductDiscount';

import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaPencilAlt } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsShuffle } from 'react-icons/bs';

ProductInfoInProductPage.propTypes = {
  urlProductId: PropTypes.string,
};

function ProductInfoInProductPage({ urlProductId }) {
  const chosenProduct = useRecoilValue(clickedProduct);

  const inpEl = useRef(null);

  const checkLoggedUser = useCheckLoggedUser();

  const existingProductInUserCart = checkLoggedUser.cart.find(
    (item) => item.id === +urlProductId,
  );

  const isProductFound = !!existingProductInUserCart;

  const productDiscountPercent =
    chosenProduct?.discount > 0
      ? (chosenProduct?.discount / chosenProduct?.price) * 100
      : null;

  const itemPrice = chosenProduct?.discount
    ? (chosenProduct?.price - chosenProduct?.discount).toFixed(2)
    : chosenProduct?.price;

  const handleAddProductToUserWishlist =
    useAddProductsToUserWishList(chosenProduct);

  const inpValueHandler = useInputValueHandler(+urlProductId);

  const handleIncrementProductQuantity = useIncrementProductQuantity(
    +urlProductId,
  );

  const handleDecrementProductQuantity = useDecrementProductQuantity(
    +urlProductId,
  );

  const handleAddProductToUserCart = useAddProductsToUserCart(chosenProduct);

  const isProductFoundFn = () => {
    !isProductFound &&
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again after adding this product to your cart',
      });
  };

  return (
    <div className="sm:col-span-6">
      <h1
        className="mb-5 text-center text-lg font-medium
          capitalize leading-[22px] sm:mb-2.5 sm:text-start
          lg:text-2xl lg:leading-[26px]"
      >
        {chosenProduct?.title}
      </h1>

      <div
        className="mb-[15px] flex items-center text-base
          leading-5"
      >
        <span className="text-[10px]">
          <FaPencilAlt />
        </span>

        <span
          className="ms-1 cursor-pointer text-secondaryColor
            hover:text-primaryColor"
        >
          Write a review
        </span>
      </div>

      <div className="mb-1 flex items-center ">
        <p className=" me-2 text-xl font-medium leading-5 lg:text-2xl">
          €{itemPrice}
        </p>

        {chosenProduct?.discount !== 0 ? (
          <ProductDiscount
            discountAmountInPerc={productDiscountPercent?.toFixed()}
            discountPrice={chosenProduct?.discount}
          />
        ) : null}
      </div>

      <span className="mb-2.5 inline-block text-[13px] leading-5">
        Tax included.
      </span>

      <div className="mb-5 text-sm leading-6 text-secondaryColor">
        <p>{chosenProduct?.description}</p>
      </div>

      <div>
        <label
          className="mb-[13px] inline-block text-base font-medium
            leading-5"
          htmlFor="quantity-inp"
        >
          Quantity
        </label>

        <div className="flex flex-wrap items-center">
          <form
            className="w-fit max-[405px]:mb-2.5 xxxs:flex
              xxxs:flex-wrap xxxs:items-center sm:mb-2.5 md:mb-0"
          >
            <div
              className={`relative w-fit text-secondaryColor
              xxxs:me-[17px] ${!isProductFound && 'opacity-50'}`}
              onClick={isProductFoundFn}
            >
              <input
                className={`h-10 w-[120px]  border-0
                bg-fifthColor text-center outline-0
                placeholder:text-primaryColor ${
                  !isProductFound && 'cursor-not-allowed'
                }`}
                id="quantity-inp"
                name="quantity-inp"
                ref={inpEl}
                value={isProductFound ? existingProductInUserCart?.quantity : 0}
                onChange={inpValueHandler}
                disabled={!isProductFound}
              />

              <span
                className="absolute right-0 top-1/2 flex h-full
                -translate-y-1/2 cursor-pointer items-center
                justify-center px-2 hover:text-thirdColor"
                onClick={handleIncrementProductQuantity}
              >
                <FiPlus />
              </span>

              <span
                className="absolute left-0 top-1/2 flex
                  h-full -translate-y-1/2 cursor-pointer items-center
                  justify-center px-2 hover:text-thirdColor"
                onClick={handleDecrementProductQuantity}
              >
                <FiMinus />
              </span>
            </div>
          </form>

          <div className="flex w-fit flex-wrap items-center">
            <ShopNowBtn
              text="add to cart"
              styles="py-2.5 px-[30px] bg-primaryColor text-white uppercase
              hover:bg-thirdColor text-sm me-[7px] cursor-pointer
              duration-300 border-0 outline-0"
              onClick={handleAddProductToUserCart}
            />

            <span
              className="me-[5px] flex h-10 w-10 cursor-pointer
              items-center justify-center bg-fifthColor text-center
              text-lg duration-300 ease-in-out hover:bg-primaryColor
              hover:text-white"
              onClick={handleAddProductToUserWishlist}
            >
              <AiOutlineHeart />
            </span>

            <span
              className="flex h-10 w-10 cursor-pointer items-center
              justify-center bg-fifthColor text-center text-lg duration-300
              ease-in-out hover:bg-primaryColor hover:text-white"
            >
              <BsShuffle />
            </span>
          </div>
        </div>
      </div>

      <SiteInfoRules />
    </div>
  );
}

export default ProductInfoInProductPage;
