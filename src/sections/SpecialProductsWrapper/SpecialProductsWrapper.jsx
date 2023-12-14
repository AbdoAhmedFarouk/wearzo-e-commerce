import NewProducts from '../../components/NewProducts/NewProducts';
import PromoBannerBox from '../../components/PromoBannerBox/PromoBannerBox';
import WrapperSection from '../../components/WrapperSection/WrapperSection';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';

import banner4 from '../../assets/banner-4.jpg';

function SpecialProductsWrapper() {
  return (
    <WrapperSection
      sectionStyles="2xl:mt-20 sm:mt-[30px] md:mt-10 mt-5 lg:mt-[50px]"
      containerStyles="md:flex md:gap-5"
    >
      <NewProducts header="special PRODUCTS" />

      <PromoBannerBox
        parentStyles="h-fit hidden md:block"
        width="2xl:w-[435.99px] 2xl:h-[724.18px]"
        mainImg={
          <img
            className="max-h-full w-full object-cover"
            src={banner4}
            alt={banner4}
          />
        }
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-white
        md:bottom-5 md:w-64 lg:bottom-6 lg:w-80 xl:bottom-[30px]
        xl:w-[375.99px]"
        >
          <div
            className="flex items-center justify-between md:p-3 lg:p-4
          xl:p-5"
          >
            <h1
              className="font-medium capitalize leading-none
              text-primaryColor md:text-lg lg:text-xl xl:text-2xl"
            >
              jeans jackets
            </h1>

            <ShopNowBtn text="shop now" />
          </div>
        </div>
      </PromoBannerBox>
    </WrapperSection>
  );
}

export default SpecialProductsWrapper;