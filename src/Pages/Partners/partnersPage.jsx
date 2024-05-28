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

const PartnersPage = () => {

    const { partners, setPartners } = usePartnersStore((state) => ({
        setPartners: state.setPartners,
        partners: state.partners
    }));

    const { trainingPartners, setTrainingPartners } = usePartnersStore((state) => ({
        setTrainingPartners: state.setTrainingPartners,
        trainingPartners: state.trainingPartners
    }));

    const { partnerLogos, setPartnerLogos } = usePartnersStore((state) => ({
        setPartnerLogos: state.setPartnerLogos,
        partnerLogos: state.partnerLogos,
    }));

    const { productOfTheMonth, setProductOfTheMonth } = usePartnersStore((state) => ({
        setProductOfTheMonth: state.setProductOfTheMonth,
        productOfTheMonth: state.productOfTheMonth,
    }));

    useEffect(() => {
        setPartners();
        setTrainingPartners();
        setPartnerLogos();
        setProductOfTheMonth();
    }, []);

  return (
      <Fragment>
          {/* Partners Highlighted */}
          <section className="partners__section">
              <div className="partners__section__top">
                  <div className="partners__section__top--title">
                      <CommonTitle firstWord="Our" secondWord="Partners" />
                      <p className="partners__section__top--description">Lorem ipsum dolor sit, amet consectetur</p>
                  </div>
              </div>
              <div className="partners__section__partner__images">
                  {partners && partners.length && partners?.map(item => (
                      <Fragment key={item?.id}>
                        <div className="partners__section__partner__images--each">
                              <a href={ item?.partner_Website } className="partners__section__partner__images--each-link" target="_blank" rel="noreferrer">
                                <img className="partners__section__partner__images--each-image" src={item?.partner_Logo} alt="" />
                            </a>
                        </div>
                      </Fragment>
                  ))}
              </div>
          </section>
          
          {/* List of partners */}
          <section className="training__partners">
              <div className="training__partners__top">
                  <div className="training__partners__top--title">
                      <CommonTitle firstWord="Our" secondWord="Training Partners" />
                      <p className="training__partners__top--description">Lorem ipsum dolor sit, amet consectetur</p>
                  </div>
              </div>
              <div className="training__partners__images">
                {trainingPartners && trainingPartners.length && trainingPartners?.map(item => (
                        <Fragment key={item?.id}>
                            <div className="training__partners__images--each">
                                    <a href={ item?.training_partner_website } className="training__partners__images--each-link" target="_blank" rel="noreferrer">
                                    <img className="training__partners__images--each-image" src={item?.training_partner_logo} alt="" />
                                </a>
                            </div>
                        </Fragment>
                    ))}
              </div>
          </section>

          {/* Partners carousel */}
          <section className="partners__logos">
                <div className="partners__logos--logos">
                    <Swiper className="mySwiper partners__logos--logos-swiper"
                        loop={true} 
                        pagination={false}
                        autoplay={{ delay: 2500, disableOnInteraction: false, }} 
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
                    }}>
                        {partnerLogos?.length && partnerLogos?.map((item, index) => (
                            <SwiperSlide key={item?.id} >
                                <div className="partners__logos--logo">
                                    <a href={item?.partner_website} className="partners__logos--logo-link" target="_blank" rel="noreferrer">
                                        <img src={item?.logo} alt='partner-logo' />
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
                        {productOfTheMonth?.length && productOfTheMonth?.slice(0, 5)?.map((item, index) => (
                            <Fragment key={index}>
                                <div className="product__of__the__month__block--bottom-testimony">
                                    <div className="product__of__the__month__block--bottom-testimony-header">
                                        <div className="product__of__the__month__block--bottom-testimony-header-left">
                                            <img src={item?.product_Logo} alt="Testimony_logo" />
                                        </div>
                                        <div className="product__of__the__month__block--bottom-testimony-header-right">
                                        <p className="product__of__the__month__block--bottom-testimony-header-right-product-name">{ item?.product_name }</p>
                                        <p className="product__of__the__month__block--bottom-testimony-header-right-company-name">{ item?.company_name }</p>
                                        </div>
                                    </div>
                                    <div className="product__of__the__month__block--bottom-testimony-body">
                                    <p>{ item?.product_description }</p>
                                    </div>
                                    <div className="product__of__the__month__block--bottom-testimony-footer">
                                    <a href={ item?.product_Website }>Know More <span><Icon component={rightArrow} /></span></a>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
              </div>
          </section>
      </Fragment>
  )
}

export default PartnersPage