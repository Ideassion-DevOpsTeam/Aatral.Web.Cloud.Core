/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import "./members.scss";
import { Modal, Spin } from "antd";
import Icon from "@ant-design/icons";
import {
	faceboonIcon,
	instagram,
	linkedInIcon,
	webIcon,
} from "../../constants/icons";
import useMemberStore from "../../store/MembersPage/membersStore";
import { useLazyQuery } from "@apollo/client";
import { getMembers } from "../../api/index";
import fallbackImage from "../../assets/Images/fallback.png";

const Members = () => {
	const [isModalOpen, setIsModalOpen] = useState({ id: "", state: false });
    const [members, setMembers] = useState();
    const [isMemberModal, setisMemberModal] = useState(false);
    const [viewMemberModal, setViewMemberModal] = useState({});

	const { founderData, setFounderData } = useMemberStore((state) => ({
		setFounderData: state.setFounderData,
		founderData: state.founderData,
	}));

	const [refetchMember, { loading, data, error }] = useLazyQuery(getMembers, {
		fetchPolicy: "network-only",
    });

    console.log(loading);

	const membersData = data ? data.members.data : [];

	useEffect(() => {
		setFounderData();
		refetchMember({
			variables: { pageCount: 1, pageSize: 12 },
		});
	}, []);
    

	const showModal = (value, data) => {
        setIsModalOpen({ id: value.id, state: true });
        setViewMemberModal(data)
        setisMemberModal(!isMemberModal)
	};

    const handleCancel = () => {
        setisMemberModal(!isMemberModal)
		setIsModalOpen({
			id: "",
			state: false,
		});
	};

	return (
		<Fragment>
			<section className="members__section">
				<div className="members__section__block">
					<p className="members__section__block__title">
						Our <span className="members__section__block__title--span">Members</span>
					</p>
				</div>

				<div className="members__section__second__section">
					<div className="members__section__second__section__members">
						{membersData?.map((item, index) => (
							<Fragment key={index}>
								<div
									onClick={() => showModal(item.id, item)}
									className="members__section__second__section__members--user"
								>
									{item?.attributes?.Image?.data === null ? (
										<img src={fallbackImage} alt="fallback" />
									) : (
										<img
											src={`https://toptamils-backend.ideassionlive.in${item?.attributes?.Image?.data?.attributes?.url}`}
											alt="Founder_Photo"
										/>
									)}
									<div className="members__section__second__section__members--user-details">
										<p className="members__section__second__section__members--user-details-name">
											{item?.attributes?.Name}
										</p>
										<p
											key={index}
											className="members__section__second__section__members--user-details-company"
										>
											{item?.attributes?.companies?.data[0]?.attributes?.Name}
										</p>
									</div>
								</div>
							</Fragment>
						))}
					</div>
				</div>
				<Modal
					width={700}
					open={isMemberModal}
					footer={null}
					onCancel={handleCancel}
                >
                    <div className="member__modal">
                        <div className="member__modal__profile">
                            <div className="member__modal__profile--picture">
                                {/* <img src={viewMemberModal?.founder_photo} alt="Founder_Photo" /> */}
                                {viewMemberModal?.attributes?.Image?.data === null ? (
                                        <img src={fallbackImage} alt="fallback" />
                                    ) : (<img
                                    src={`https://toptamils-backend.ideassionlive.in${viewMemberModal?.attributes?.Image?.data?.attributes?.url}`}
                                    alt="Founder_Photo"
                                />)}
                            </div>
                            <div className="member__modal__profile--details">
                                <div className="member__modal__profile--details-names">
                                    <p>{viewMemberModal?.attributes?.Name}</p>
                                    <p>{viewMemberModal?.attributes?.companies?.data[0]?.attributes?.Name}</p>
                                </div>
                                <div className="member__modal__profile--details-social">
                                    <span className="member__modal__profile--details-social-link">
                                        <a href={viewMemberModal?.attributes?.companies?.data[0]?.attributes?.Website} target="_blank" rel="noreferrer">
                                            <Icon component={webIcon} />
                                        </a>
                                    </span>
                                    <span className="member__modal__profile--details-social-link">
                                        <a href={viewMemberModal?.linkedIn} target="_blank" rel="noreferrer">
                                            <Icon component={linkedInIcon} />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="member__modal__description">
                            <div className="member__modal__description--texts">
                                <p>{viewMemberModal?.attributes?.About}</p>
                            </div>
                            <div className="member__modal__description--logo">
                                <a href={viewMemberModal?.website_link} target="_blank" rel="noreferrer">
                                    {viewMemberModal?.attributes?.Image?.data === null ? (
                                        <img src={fallbackImage} alt="fallback" />
                                    ) : (<img src={`https://toptamils-backend.ideassionlive.in${ viewMemberModal?.attributes?.companies?.data[0]?.attributes?.Logo?.data?.attributes?.url }`} alt="company-logo" />)}
                                </a>
                            </div>
                        </div>
                    </div>
				</Modal>
			</section>
		</Fragment>
	);
};

export default Members;
