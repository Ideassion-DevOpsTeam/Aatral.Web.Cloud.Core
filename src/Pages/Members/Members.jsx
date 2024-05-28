/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react';
import './members.scss';
import { Modal } from 'antd';
import Icon from '@ant-design/icons';
import { faceboonIcon, instagram, linkedInIcon, webIcon } from '../../constants/icons';
import useMemberStore from '../../store/MembersPage/membersStore';

const Members = () => {
    const [isModalOpen, setIsModalOpen] = useState({id: '', state: false});

    const { founderData, setFounderData } = useMemberStore((state) => ({
        setFounderData: state.setFounderData,
        founderData: state.founderData
    }));

    useEffect(() => {
        setFounderData();
    }, []);

    const showModal = (value) => {
        setIsModalOpen({ id: value.id, state: true });
    };

    const handleCancel = () => {
        setIsModalOpen({
            id: '', state: false
        });
    };

    return (
        <Fragment>
            <section className="members__section">
                <div className="members__section__block">
                    <p className="members__section__block__title">Our <span className="members__section__block__title--span">Members</span></p>
                </div>

                <div className="members__section__second__section">
                    <div className="members__section__second__section__members">
                        {founderData?.map((item, index) => (
                            <Fragment key={index}>
                                <div onClick={() => showModal(item)} className="members__section__second__section__members--user">
                                    <img src={item?.founder_photo} alt="Founder_Photo" />
                                    <div className="members__section__second__section__members--user-details">
                                        <p className="members__section__second__section__members--user-details-name">{ item?.owner_name }</p>
                                        <p className="members__section__second__section__members--user-details-company">{ item?.company_name }</p>
                                    </div>
                                </div>
                                <Modal width="60%" open={isModalOpen.id === item.id && isModalOpen.state} footer={null} onCancel={handleCancel}>
                                    <div className="member__modal">
                                        <div className="member__modal__profile">
                                            <div className="member__modal__profile--picture">
                                                <img src={item?.founder_photo} alt="Founder_Photo" />
                                            </div>
                                            <div className="member__modal__profile--details">
                                                <div className="member__modal__profile--details-names">
                                                    <p>{ item?.owner_name }</p>
                                                    <p>{ item?.company_name }</p>
                                                </div>
                                                <div className="member__modal__profile--details-social">
                                                    <span className="member__modal__profile--details-social-link">
                                                        <a href={item?.website_link} target="_blank" rel="noreferrer"><Icon component={webIcon} /></a>
                                                    </span>
                                                    <span className="member__modal__profile--details-social-link">
                                                        <a href={item?.instagram} target="_blank" rel="noreferrer"><Icon component={instagram} /></a>
                                                    </span>
                                                    <span className="member__modal__profile--details-social-link">
                                                        <a href={item?.facebook} target="_blank" rel="noreferrer"><Icon component={faceboonIcon} /></a>
                                                    </span>
                                                    <span className="member__modal__profile--details-social-link">
                                                        <a href={item?.linkedIn} target="_blank" rel="noreferrer"><Icon component={linkedInIcon} /></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="member__modal__description">
                                            <div className="member__modal__description--texts">
                                                <p>{ item?.desc }</p>
                                            </div>
                                            <div className="member__modal__description--logo">
                                                <a href={item?.website_link} target="_blank" rel="noreferrer">
                                                    <img src={item?.company_logo} alt="company-logo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </Fragment>
                        ))}
                    </div>   
                </div>    
            </section>
      </Fragment>
      

  )
}

export default Members