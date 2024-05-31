/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react';
import 'swiper/css';
import './partners.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '@ant-design/icons';
import { Autoplay } from 'swiper/modules';
import CommonTitle from '../../components/CommonTitle/commonTitle';
import usePartnersStore from '../../store/Partners/partnerPage';
import { rightArrow } from '../../constants/icons';
import { useLazyQuery } from '@apollo/client';
import { getPartners } from '../../api';
import product_Logo from '../../assets/Images/POM/POM.png'
import SocialIconsComponent from '../../components/Social/SocialIcons';
import { imageBaseURL } from '../../api/API_URL';

const PartnersPage = () => {
  const { partners, setPartners } = usePartnersStore((state) => ({
    setPartners: state.setPartners,
    partners: state.partners,
  }));

  const { trainingPartners, setTrainingPartners } = usePartnersStore(
    (state) => ({
      setTrainingPartners: state.setTrainingPartners,
      trainingPartners: state.trainingPartners,
    })
  );

  const { partnerLogos, setPartnerLogos } = usePartnersStore((state) => ({
    setPartnerLogos: state.setPartnerLogos,
    partnerLogos: state.partnerLogos,
  }));

  const { productOfTheMonth, setProductOfTheMonth } = usePartnersStore(
    (state) => ({
      setProductOfTheMonth: state.setProductOfTheMonth,
      productOfTheMonth: state.productOfTheMonth,
    })
  );

  const [refetchPartners, { loading, data, error }] = useLazyQuery(
    getPartners,
    {
      fetchPolicy: "network-only",
    }
  );

  const partnersInfo = data ? data?.companies?.data : [];

  useEffect(() => {
    setPartners();
    setTrainingPartners();
    setPartnerLogos();
    setProductOfTheMonth();
    refetchPartners({});
  }, []);

  if (!loading) {
    console.log(data);
  }

  return (
    <Fragment>
      {/* Partners Highlighted */}
        <section className="partners__section">
          <SocialIconsComponent />
        <div className="partners__section__top">
          <div className="partners__section__top--title">
            <CommonTitle firstWord="Our" secondWord="Partners" />
            <p className="partners__section__top--description">
              We have been working with the best
            </p>
          </div>
        </div>
        <div className="partners__section__partner__images">
          {partnersInfo &&
            partnersInfo.length &&
            partnersInfo?.map((item) =>
              item?.attributes?.Type === "Partner" ? (
                <Fragment key={item?.id}>
                  <div className="partners__section__partner__images--each">
                    <a
                      href={item?.attributes?.Website}
                      className="partners__section__partner__images--each-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="partners__section__partner__images--each-image"
                        src={`${imageBaseURL}${item?.attributes?.Logo?.data?.attributes?.url}`}
                        alt=""
                      />
                    </a>
                  </div>
                </Fragment>
              ) : null
            )}
        </div>
      </section>

      {/* List of partners */}
      <section className="training__partners">
        <div className="training__partners__top">
          <div className="training__partners__top--title">
            <CommonTitle firstWord="Our" secondWord="Training Partners" />
            <p className="training__partners__top--description">
              We have been working with the best
            </p>
          </div>
        </div>
        <div className="training__partners__images">
          {partnersInfo &&
            partnersInfo.length &&
            partnersInfo?.map((item) =>
              item?.attributes?.Type === "Training_Partner" ? (
                <Fragment key={item?.id}>
                  <div className="training__partners__images--each">
                    <a
                      href={item?.training_partner_website}
                      className="training__partners__images--each-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="training__partners__images--each-image"
                        src={`${imageBaseURL}${item?.attributes?.Logo?.data?.attributes?.url}`}
                        alt=""
                      />
                    </a>
                  </div>
                </Fragment>
              ) : null
            )}
        </div>
      </section>

      {/* Partners carousel */}
      <section className="partners__logos">
        <div className="partners__logos--logos">
          <Swiper
            className="mySwiper partners__logos--logos-swiper"
            loop={true}
            pagination={false}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            centeredSlides={false}
            modules={[Autoplay]}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {partnersInfo?.length &&
              partnersInfo?.map((item, index) => (
                <SwiperSlide key={item?.id}>
                  <div className="partners__logos--logo">
                    <a
                      href={item?.attributes?.partner_website}
                      className="partners__logos--logo-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`${imageBaseURL}${item?.attributes?.Logo?.data?.attributes?.url}`}
                        alt="partner-logo"
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>

      {/* Product of the month */}
      <section className="product__of__the__month">
        <div className="product__of__the__month__block">
          <div className="product__of__the__month__block--top">
            <h1>Product of the month</h1>
            <p>Top products from our members community for this month</p>
          </div>
          <div className="product__of__the__month__block--bottom">
            {productOfTheMonth?.length &&
              productOfTheMonth?.slice(0, 5)?.map((item, index) => (
                <Fragment key={index}>
                  <div className="product__of__the__month__block--bottom-testimony">
                    <div className="product__of__the__month__block--bottom-testimony-header">
                      <div className="product__of__the__month__block--bottom-testimony-header-left">
                        <img src={product_Logo} alt="Testimony_logo" />
                      </div>
                      <div className="product__of__the__month__block--bottom-testimony-header-right">
                        <p className="product__of__the__month__block--bottom-testimony-header-right-product-name">
                          {item?.product_name}
                        </p>
                        <p className="product__of__the__month__block--bottom-testimony-header-right-company-name">
                          {item?.company_name}
                        </p>
                      </div>
                    </div>
                    <div className="product__of__the__month__block--bottom-testimony-body">
                      <p>{item?.product_description}</p>
                    </div>
                    <div className="product__of__the__month__block--bottom-testimony-footer">
                      <a href={item?.product_Website}>
                        Know More{" "}
                        <span>
                          <Icon component={rightArrow} />
                        </span>
                      </a>
                    </div>
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PartnersPage;
